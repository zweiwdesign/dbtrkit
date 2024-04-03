<?php

        PG_Blocks_v2::register_block_type( array(
            'name' => 'dbtrkit/column',
            'title' => __( 'Column', 'dbtrkit' ),
            'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="130" height="68" viewBox="0 0 130 68">     <rect fill="none" stroke="#777" stroke-width="2" x="1" y="1" width="128" height="66"/> </svg>',
            'render_template' => 'blocks/column/column.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/column/column.js',
            'attributes' => array(
                'at_m' => array(
                    'type' => 'string',
                    'default' => ''
                ),
                'padding' => array(
                    'type' => 'string',
                    'default' => ''
                )
            ),
            'example' => array(
'at_m' => '', 'padding' => ''
            ),
            'dynamic' => true,
            'has_inner_blocks' => true,
            'version' => '1.0.54'
        ) );
