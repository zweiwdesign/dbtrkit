
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
    
    const block = registerBlockType( 'dbtrkit/grid', {
        apiVersion: 2,
        title: 'Grid',
        description: '',
        icon: el('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '130', height: '68', viewBox: '0 0 130 68' }, [' ', el('rect', { fill: 'none', stroke: '#777', strokeWidth: '2', x: '1', y: '1', width: '19', height: '66' }), ' ', el('rect', { fill: 'none', stroke: '#777', strokeWidth: '2', x: '28', y: '1', width: '19', height: '66' }), ' ', el('rect', { fill: 'none', stroke: '#777', strokeWidth: '2', x: '55', y: '1', width: '73', height: '66' }), ' ']),
        category: 'text',
        keywords: [],
        supports: {},
        attributes: {
        },
        example: { attributes: {  } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'uk-section uk-section-secondary' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = useInnerBlocksProps({ className: 'uk-grid', 'uk-grid': null }, {
                allowedBlocks: [ 'dbtrkit/column' ],
                template: [
    [ 'dbtrkit/column', {} ]
],
                orientation: 'vertical',
            } );
                            
            
            return el(Fragment, {}, [
                el('div', { ...blockProps }, [' ', el('div', { className: 'uk-container' }, [' ', el('div', { ...innerBlocksProps }), ' ']), ' ']),                        
                
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
