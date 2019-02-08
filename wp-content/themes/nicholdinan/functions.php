<?php
/**
 * Enqueue Styles & Scripts
 */
function nicholdinan_styles() {
    wp_enqueue_style( 'nicholdinan_styles', get_template_directory_uri() . '/dist/styles/style.css' );
    wp_enqueue_script( 'nicholdinan_scripts', get_template_directory_uri() . '/dist/scripts/min.js/main.js', array ( 'jquery' ), 1.1, true);
} 
add_action( 'wp_enqueue_scripts', 'nicholdinan_styles' );


/**
 * Add Custom Styles to Admin Area
 */
function nicholdinan_admin_styles() {
    wp_enqueue_style('nicholdinan-admin-styles', get_template_directory_uri() . '/admin/css/admin-styles.css');
}
add_action('admin_enqueue_scripts', 'nicholdinan_admin_styles');

function nicholdinan_login_stylesheet() {
    wp_enqueue_style( 'custom-login', get_stylesheet_directory_uri() . '/admin/css/login-styles.css' );
}
add_action( 'login_enqueue_scripts', 'nicholdinan_login_stylesheet' );

/**
 * Register Main Nav
 */
function register_nicholdinan_menus() {
    register_nav_menus(
        array(
            'nicholdinan-menu' => __( 'Header Menu' )
        )
    );
}
add_action( 'init', 'register_nicholdinan_menus' );

/**
 * Theme Support for Thumbnails
 */
add_theme_support( 'post-thumbnails' );

/**
 * Remove WYSIWYG editor on all pages except About (uses contact form 7)
 */
add_action( 'admin_head', 'hide_editor' );
function hide_editor() {
    $template_file = basename( get_page_template() );
    if($template_file !== 'about.php') { 
        remove_post_type_support('page', 'editor');
    };
    remove_post_type_support('post', 'editor');
}

/**
 * Change Posts dash icon TODO: override art icon with 'content: "\f540"; '
 */
add_action( 'wp_enqueue_scripts', 'load_dashicons_front_end' );
function load_dashicons_front_end() {
wp_enqueue_style( 'dashicons' );
}

/**
 * Rename 'Posts' in dashboard to 'Art'
 */
add_action( 'init', 'cp_change_post_object' );
function cp_change_post_object() {
    $get_post_type = get_post_type_object('post');
    $labels = $get_post_type->labels;
        $labels->name = 'Art';
        $labels->singular_name = 'Art piece';
        $labels->add_new = 'Add New Art';
        $labels->add_new_item = 'Add New Art';
        $labels->edit_item = 'Edit Art Piece';
        $labels->new_item = 'New Art';
        $labels->view_item = 'View Art';
        $labels->search_items = 'Search Art';
        $labels->not_found = 'No Art found';
        $labels->not_found_in_trash = 'No Art found in Bin';
        $labels->all_items = 'All Art';
        $labels->menu_name = 'Art';
        $labels->name_admin_bar = 'Art';
}

/**
 * Replace Instagram nav item (WP created) with html markup for logo
 */
function nav_amendments($item_output, $item) {
    if ($item->title == 'Instagram') {
        return "<a href=''><img id='instagram-logo' src=''/></a>";
    } elseif ($item->menu_order == 1){ 
        // alter first nav item. Add markup to make name bold.
        $ArtOf = explode("Nichol Dinan",$item->title);
        $name = $ArtOf[0];
        $href = home_url();
        return "<a href='" . $href . "'>" . "<span>" . $name . "</span>" . "<span>Nichol Dinan</span>" . "</a>";
    }
    return $item_output;
  }
  add_filter('walker_nav_menu_start_el','nav_amendments',1,2);

/**
 * Metabox custom fields
 */
function prefix_meta_boxes( $meta_boxes ) {
    $prefix = '_ND_'; 

    /**
     * Posts (Art peices)
     */
    $meta_boxes[] = array(
        'title'  => 'Art piece',
        'post_types' => 'post',
        'fields' => array(
            array( 
                'id'   => $prefix . 'art_title',
                'name' => 'Title',
                'type' => 'text',
            ),
            array( 
                'id'   => $prefix . 'art_year',
                'name' => 'Year',
                'type' => 'text',
            ),
            array(
                'id'   => $prefix . 'art_description',
                'name' => 'Description',
                'type' => 'textarea',
            ),
            array(
                'id'   => $prefix . 'art_dimensions',
                'name' => 'Dimensions',
                'type' => 'text',
                'desc' => 'please use mm',
            ),
            array(
                'id'      => $prefix . 'art_media',
                'name'    => 'Media used',
                'type'    => 'checkbox_list',
                'options' => array(
                    'colour pencil'     => 'Colour pencil',
                    'acrylic'           => 'Acrylic',
                    'metallic pigment'  => 'Metallic Pigment',
                ),
            ),
            array(
                'id'      => $prefix . 'art_orientation',
                'name'    => 'Orientation',
                'type'    => 'checkbox_list',
                'options' => array(
                    'landscape'     => 'landscape',
                    'portrait'      => 'Portrait',
                ),
            ),
        ),
    );

    /**
     * Homepage
     */
    $meta_boxes[] = array(
        'title'  => 'Image options',
        'post_types' => 'page',
        'exclude' => array(
            'template' => array('about.php', 'gallery.php'),
        ),
        'fields' => array(
            array(
                'id'   => $prefix . 'home_images',
                'name' => 'Homepage Images for Slideshow',
                'type' => 'image_advanced',
                'desc' =>   'Add images to be displayed on homepage in a slideshow. Max 3 images.',
            ),
            array(
                'id'   => $prefix . 'slider_speed',
                'name' => 'Image slider speed',
                'type' => 'range',
                'min'  => 1000,
                'max'  => 8000,
                'step' => 100,
                'desc' => 
                    'Slideshow speed. How many milliseconds an image should display for before
                     fading to next image. 1000ms = 1 second.'
            ),
        ),
    );

    /**
     * About Page
     */
    $meta_boxes[] = array(
        'title'  => 'About page content',
        'post_types' => 'page',
        'include' => array(
            'template' => 'about.php',
        ),
        'fields' => array(
            array(
                'id'   => $prefix . 'header_text',
                'name' => 'Header Text',
                'type' => 'wysiwyg',
            ),
            array(
                'id'   => $prefix . 'about_me',
                'name' => 'About Me',
                'type' => 'wysiwyg',
            ),
        ),
    );

    return $meta_boxes;
};
add_filter( 'rwmb_meta_boxes', 'prefix_meta_boxes' );

?>
