<?php
/*
    Template Name: About
*/

$prefix = '_ND_'; 
$header_text = rwmb_meta($prefix . 'header_text');
$about_me = rwmb_meta($prefix . 'about_me');

$img_id = get_post_thumbnail_id();
$img_src = wp_get_attachment_image_url( $img_id, 'full' );
$img_srcset = wp_get_attachment_image_srcset( $img_id, 'full' );
$img_alt = get_post_meta( $img_id, '_wp_attachment_image_alt', true );

get_header() ?>

        <main class="bio-content">
            <?php echo $header_text; ?>
            <div class="chol-img-contain">
                <img 
                    class="chol-img landscape" 
                    src="<?php echo esc_attr( $img_src ); ?>" 
                    srcset="<?php echo esc_attr( $img_srcset ); ?>" 
                    sizes="100vw" 
                    alt="<?php echo $img_alt; ?>"
                >
            </div>
            <div class="main-content"><?php echo $about_me; ?></div>
            <div>
                <p>Feel free to contact me with the form below:</p>  
            </div> 
        </main>
    </div> <!-- site container --> 
    <!-- contact form -->
    <section class="form-background" >
        <div class="form-wrap">
            <?php if ( have_posts() ) : the_post(); ?>
            <div><?php the_content(); ?></div>
            <?php endif; ?>
        </div>
    </section>
<?php get_footer() ?>
