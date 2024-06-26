<?php

        PG_Blocks_v2::register_block_type( array(
            'name' => 'dbtrkit/section',
            'title' => __( 'Section', 'dbtrkit' ),
            'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="130" height="68" viewBox="0 0 130 68">     <rect fill="none" stroke="#777" stroke-width="2" x="1" y="1" width="19" height="66"/>     <rect fill="none" stroke="#777" stroke-width="2" x="28" y="1" width="19" height="66"/>     <rect fill="none" stroke="#777" stroke-width="2" x="55" y="1" width="73" height="66"/> </svg>',
            'render_template' => 'blocks/section/section.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/section/section.js',
            'attributes' => array(
                'color' => array(
                    'type' => 'string',
                    'default' => 'uk-section-default'
                ),
                'size' => array(
                    'type' => 'string',
                    'default' => ''
                ),
                'width' => array(
                    'type' => 'string',
                    'default' => ''
                ),
                'sideexpand' => array(
                    'type' => 'string',
                    'default' => ''
                ),
                'vertical_alignment' => array(
                    'type' => 'string',
                    'default' => ''
                )
            ),
            'example' => array(
'color' => 'uk-section-default', 'size' => '', 'width' => '', 'sideexpand' => '', 'vertical_alignment' => ''
            ),
            'dynamic' => true,
            'has_inner_blocks' => true,
            'version' => '1.1.55'
        ) );
