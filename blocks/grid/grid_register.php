<?php

        PG_Blocks_v2::register_block_type( array(
            'name' => 'dbtrkit/grid',
            'title' => __( 'Grid', 'dbtrkit' ),
            'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="130" height="68" viewBox="0 0 130 68">     <rect fill="none" stroke="#777" stroke-width="2" x="1" y="1" width="19" height="66"/>     <rect fill="none" stroke="#777" stroke-width="2" x="28" y="1" width="19" height="66"/>     <rect fill="none" stroke="#777" stroke-width="2" x="55" y="1" width="73" height="66"/> </svg>',
            'render_template' => 'blocks/grid/grid.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/grid/grid.js',
            'attributes' => array(

            ),
            'example' => array(

            ),
            'dynamic' => true,
            'has_inner_blocks' => true,
            'version' => '1.0.12'
        ) );
