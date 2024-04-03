
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
    
    const block = registerBlockType( 'dbtrkit/section', {
        apiVersion: 2,
        title: 'Section',
        description: '',
        icon: el('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '130', height: '68', viewBox: '0 0 130 68' }, [' ', el('rect', { fill: 'none', stroke: '#777', strokeWidth: '2', x: '1', y: '1', width: '19', height: '66' }), ' ', el('rect', { fill: 'none', stroke: '#777', strokeWidth: '2', x: '28', y: '1', width: '19', height: '66' }), ' ', el('rect', { fill: 'none', stroke: '#777', strokeWidth: '2', x: '55', y: '1', width: '73', height: '66' }), ' ']),
        category: 'text',
        keywords: [],
        supports: {},
        attributes: {
            color: {
                type: 'string',
                default: 'uk-section-default',
            },
            size: {
                type: 'string',
                default: '',
            },
            width: {
                type: 'string',
                default: '',
            },
            sideexpand: {
                type: 'string',
                default: '',
            },
            vertical_alignment: {
                type: 'string',
                default: '',
            }
        },
        example: { attributes: { color: 'uk-section-default', size: '', width: '', sideexpand: '', vertical_alignment: '' } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'uk-section ' + propOrDefault( props.attributes.color, 'color' ) + ' ' + propOrDefault( props.attributes.size, 'size' ) });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = useInnerBlocksProps({ className: 'uk-grid uk-flex-between ' + propOrDefault( props.attributes.vertical_alignment, 'vertical_alignment' ), 'uk-grid': null }, {
                allowedBlocks: [ 'dbtrkit/column' ],
                template: [
    [ 'dbtrkit/column', {} ]
],
                orientation: 'vertical',
            } );
                            
            
            return el(Fragment, {}, [
                el('div', { ...blockProps }, [' ', el('div', { className: 'uk-container ' + propOrDefault( props.attributes.width, 'width' ) + ' ' + propOrDefault( props.attributes.sideexpand, 'sideexpand' ) }, [' ', el('div', { ...innerBlocksProps }), ' ']), ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(SelectControl, {
                                        value: props.attributes.color,
                                        label: __( 'Color' ),
                                        onChange: function(val) { setAttributes({color: val}) },
                                        options: [
                                            { value: '', label: '-' },
                                            { value: 'uk-section-primary', label: 'primary' },
                                            { value: 'uk-section-secondary', label: 'secondary' },
                                            { value: 'uk-section-muted', label: 'muted' }
                                        ]
                                    }),
                                    el(SelectControl, {
                                        value: props.attributes.size,
                                        label: __( 'Size' ),
                                        onChange: function(val) { setAttributes({size: val}) },
                                        options: [
                                            { value: '', label: '-' },
                                            { value: 'uk-section-xsmall', label: 'XS' },
                                            { value: 'uk-section-small', label: 'S' },
                                            { value: 'uk-section-large', label: 'L' },
                                            { value: 'uk-section-xlarge', label: 'XL' },
                                            { value: 'uk-padding-remove-vertical', label: 'remove' }
                                        ]
                                    }),
                                    el(SelectControl, {
                                        value: props.attributes.width,
                                        label: __( 'Width' ),
                                        onChange: function(val) { setAttributes({width: val}) },
                                        options: [
                                            { value: '', label: '-' },
                                            { value: 'uk-container-small', label: 'S' },
                                            { value: 'uk-container-large', label: 'L' },
                                            { value: 'uk-container-xlarge', label: 'XL' },
                                            { value: 'uk-container-expand', label: 'expand' },
                                            { value: 'uk-padding-remove-horizontal uk-container-expand', label: 'remove' }
                                        ]
                                    }),
                                    el(SelectControl, {
                                        value: props.attributes.sideexpand,
                                        label: __( 'Expand one side' ),
                                        onChange: function(val) { setAttributes({sideexpand: val}) },
                                        options: [
                                            { value: '', label: '-' },
                                            { value: 'uk-container-expand-left', label: 'left' },
                                            { value: 'uk-container-expand-right', label: 'right' }
                                        ]
                                    }),
                                    el(SelectControl, {
                                        value: props.attributes.vertical_alignment,
                                        label: __( 'Vertical alignment' ),
                                        onChange: function(val) { setAttributes({vertical_alignment: val}) },
                                        options: [
                                            { value: '', label: '-' },
                                            { value: 'uk-flex-middle', label: 'middle' },
                                            { value: 'uk-flex-bottom', label: 'bottom' }
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
