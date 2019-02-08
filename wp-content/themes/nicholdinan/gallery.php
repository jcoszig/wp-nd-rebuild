<?php 
/*
    Template Name: Gallery
*/
get_header();

$prefix = '_ND_';
$currentYear = date('Y');

// Loop over current year, down to 2015 (oldest posts)
while($currentYear >= 2015){ 
    
    // Find posts matching current year
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

    if ( $the_query->have_posts() ) : ?>
    <?php while ( $the_query->have_posts() ) : $the_query->the_post(); 
        // metabox values
        $title = rwmb_meta($prefix . 'art_title'); 
        $year = rwmb_meta($prefix . 'art_year'); 
        $description = rwmb_meta($prefix . 'art_description'); 
        $dimensions = rwmb_meta($prefix . 'art_dimensions');  
        $media = rwmb_meta($prefix . 'art_media');  
        $orientation = rwmb_meta($prefix . 'art_orientation');
        ?>
        <section class="year-test <?php echo $currentYear; ?>">
        <h2><?php echo ($currentYear != 2015 ? $currentYear : '2015 and earlier'); ?></h2>
            <h2><?php echo $title; ?></h2>
            <p><?php echo $description; ?></p>
            <p><?php echo $dimensions; ?></p>
            <p><?php foreach ( $media as $key => $used ){
                echo ( $key !== count( $media ) -1 ) ? $used . ', ' : $used; //remove comma from final item
                }?>
            </p>
            <div class="post-img">
                <img 
                    class="<?php foreach ( $orientation as $oriented ){ echo $oriented; }?>" 
                    href="<?php the_post_thumbnail('full'); ?>">
                    <a href="<?php the_permalink(); ?>"></a>
                </img>
            </div>
        </section>
        <?php wp_reset_postdata(); 
    endwhile;
    endif;
    $currentYear--;
} 
get_footer(); ?>
