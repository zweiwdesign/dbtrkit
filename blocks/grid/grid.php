<div <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "uk-section uk-section-secondary", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <div class="uk-container">
            <div class="uk-grid" uk-grid <?php if(!empty($_GET['context']) && $_GET['context'] === 'edit') echo 'data-wp-inner-blocks'; ?>>
            <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo PG_Blocks_v2::getInnerContent( $args ); ?>
        </div>
    </div>
</div>