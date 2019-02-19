<?php 
/*
    Template Name: Gallery
*/
get_header();
$prefix = '_ND_';
$currentYear = date('Y'); ?> 
            <header class="timeline-title">
                <h2>Year</h2>
            </header>
<?php // Loop over current year, down to 2015 (oldest posts)
while($currentYear >= 2015){ ?>
        <main class="gallery-timeline">
            <aside class="timeline-section">
                <h2 class="timeline-year">
                    <?php echo ($currentYear != 2015 ? $currentYear : '2015<span> &amp; earlier </span>'); ?>
                </h2>
                <div class="timeline-line"></div>
            </aside>
            <section class="images-section <?php echo $currentYear; ?>">

<?php // Find posts matching current year
    $the_query = new WP_Query(  array (
        'showposts' => -1,
        'post_type' => 'post',
        'meta_query'=> array(
            array(
                'key' => '_ND_art_year',
                'compare' => '=',
                'value' => $currentYear,
            )
        ),
    ) ); 

    // if ( $the_query->have_posts() ) : 
        $count = 0;
        while ( $the_query->have_posts() ) : $the_query->the_post(); 
            $count++;
            // metabox values
            $title = rwmb_meta($prefix . 'art_title'); 
            $orientation = rwmb_meta($prefix . 'art_orientation');
            // images
            $image_id = get_post_thumbnail_id();
            $img_src = wp_get_attachment_image_url( $image_id, 'full' );
            $img_srcset = wp_get_attachment_image_srcset( $image_id, 'full' );
            $img_alt = get_post_meta( $image_id, '_wp_attachment_image_alt', true ); 
            ?>
                <div class="post-img-wrap <?php foreach ( $orientation as $oriented ) : echo $oriented; ?>-parent">
                    <h2><?php echo $title; ?></h2>
                    <div class="post-img <?php echo $oriented; endforeach; ?>-wrap">
                        <a href="<?php the_permalink(); ?>"><div class="hover-border"></div></a>
                        <img 
                            class="<?php echo $oriented; ?>" 
                            src="<?php echo $img_src; ?>"
                            srcset="<?php echo $img_srcset; ?>"
                            sizes=<?php if( $oriented == "portrait"){
                                echo "33vw";
                            } elseif( $oriented == "landscape"){
                                echo "50vw";
                            } else { 
                                echo "100vw";
                            }?>
                            alt="<?php echo esc_attr( $img_alt ); ?>"
                        />
                    </div>
                </div>
            <?php wp_reset_postdata(); 
        endwhile;
        $currentYear--; ?>
            </section>
        </main>
<?php
}
get_footer(); ?>