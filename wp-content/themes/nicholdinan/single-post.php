<?php get_header(); 

$prefix = '_ND_';

$title = rwmb_meta($prefix . 'art_title'); 
$year = rwmb_meta($prefix . 'art_year'); 
$description = rwmb_meta($prefix . 'art_description'); 
$dimensions = rwmb_meta($prefix . 'art_dimensions');  
$media = rwmb_meta($prefix . 'art_media');  
$orientation = rwmb_meta($prefix . 'art_orientation'); 
?>
<main>
    <h2><?php echo $title; ?></h2>
    <p><?php echo $year; ?></p>
    <p><?php echo $description; ?></p>
    <p><?php echo $dimensions; ?></p>
    <p><?php foreach ( $media as $key => $used ){
        echo ( $key !== count( $media ) -1 ) ? $used . ', ' : $used; //remove comma from final item
        }?>
    </p>
    <div class="post-img">
        <img 
            class="<?php foreach ( $orientation as $oriented ){ echo $oriented; }?>" 
            href="<?php the_post_thumbnail('full'); ?>">.
        </img>
    </div>
</main>
<?php get_footer(); ?>