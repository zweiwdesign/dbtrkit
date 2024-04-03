<div <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "uk-section ".PG_Blocks_v2::getAttribute( $args, 'color' )." ".PG_Blocks_v2::getAttribute( $args, 'size' )."", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <div class="uk-container <?php echo PG_Blocks_v2::getAttribute( $args, 'width' ) ?> <?php echo PG_Blocks_v2::getAttribute( $args, 'sideexpand' ) ?>">
            <div class="uk-grid uk-flex-between <?php echo PG_Blocks_v2::getAttribute( $args, 'vertical_alignment' ) ?>" uk-grid <?php if(!empty($_GET['context']) && $_GET['context'] === 'edit') echo 'data-wp-inner-blocks'; ?>>
            <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo PG_Blocks_v2::getInnerContent( $args ); ?>
        </div>
    </div>
</div>