
( function ( blocks, element, blockEditor ) {
    const el = element.createElement,
        registerBlockType = blocks.registerBlockType,
        ServerSideRender = PgServerSideRender2,
        InspectorControls = blockEditor.InspectorControls,
        useBlockProps = blockEditor.useBlockProps;
        
    const {__} = wp.i18n;
    const {ColorPicker, TextControl, ToggleControl, SelectControl, Panel, PanelBody, Disabled, TextareaControl, BaseControl} = wp.components;
    const {useSelect} = wp.data;
    const {RawHTML, Fragment} = element;
   
    const {InnerBlocks, URLInputButton, RichText} = wp.blockEditor;
    const useInnerBlocksProps = blockEditor.useInnerBlocksProps || blockEditor.__experimentalUseInnerBlocksProps;
    
    const propOrDefault = function(val, prop, field) {
        if(block.attributes[prop] && (val === null || val === '')) {
            return field ? block.attributes[prop].default[field] : block.attributes[prop].default;
        }
        return val;
    }
    
    const block = registerBlockType( 'dbtrkit/column', {
        apiVersion: 2,
        title: 'Column',
        description: '',
        icon: el('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '130', height: '68', viewBox: '0 0 130 68' }, [' ', el('rect', { fill: 'none', stroke: '#777', strokeWidth: '2', x: '1', y: '1', width: '128', height: '66' }), ' ']),
        category: 'text',
        parent: [ 'dbtrkit/grid' ],

        keywords: [],
        supports: {},
        attributes: {
            at_m: {
                type: 'string',
                default: '',
            },
            padding: {
                type: 'string',
                default: '',
            }
        },
        example: { attributes: { at_m: '', padding: '' } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'uk-width-1-1 ' + propOrDefault( props.attributes.at_m, 'at_m' ) });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = useInnerBlocksProps({ className: propOrDefault( props.attributes.padding, 'padding' ) }, {
            } );
                            
            
            return el(Fragment, {}, [
                el('div', { ...blockProps }, [' ', el('div', { ...innerBlocksProps }), ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(SelectControl, {
                                        value: props.attributes.at_m,
                                        label: __( '@m' ),
                                        onChange: function(val) { setAttributes({at_m: val}) },
                                        options: [
                                            { value: '', label: '-' },
                                            { value: 'uk-width-1-2@m', label: 'uk-width-1-2@m' },
                                            { value: 'uk-width-1-3@m', label: 'uk-width-1-3@m' },
                                            { value: 'uk-width-2-3@m', label: 'uk-width-2-3@m' }
                                        ]
                                    }),
                                    el(SelectControl, {
                                        value: props.attributes.padding,
                                        label: __( 'Remove Padding' ),
                                        onChange: function(val) { setAttributes({padding: val}) },
                                        options: [
                                            { value: '', label: '-' },
                                            { value: 'uk-container-item-padding-remove-left', label: 'left' },
                                            { value: 'uk-container-item-padding-remove-right', label: 'right' }
                                        ]
                                    }),    
                                ])
                            )
                        ]
                    )                            

            ]);
        },

            save: function(props) {
                return el(InnerBlocks.Content);
            }                        
    
    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);                        
