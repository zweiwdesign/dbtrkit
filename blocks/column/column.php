<div <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "uk-width-1-1 ".PG_Blocks_v2::getAttribute( $args, 'at_m' )."", ) ); else echo 'data-wp-block-props="true"'; ?>>
        <div class="<?php echo PG_Blocks_v2::getAttribute( $args, 'padding' ) ?>" <?php if(!empty($_GET['context']) && $_GET['context'] === 'edit') echo 'data-wp-inner-blocks'; ?>>
        <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo PG_Blocks_v2::getInnerContent( $args ); ?>
    </div>
</div>