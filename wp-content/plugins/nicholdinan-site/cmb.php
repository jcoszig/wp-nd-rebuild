<?php

/**
 * Metabox content
 */
add_filter( 'rwmb_meta_boxes', 'prefix_meta_boxes' );
function prefix_meta_boxes( $meta_boxes ) {
    $meta_boxes[] = array(
        'title'  => 'Test Meta Box',
        'fields' => array(
            array(
                'id'   => 'name',
                'name' => 'Name',
                'type' => 'text',
            ),
            array(
                'id'      => 'gender',
                'name'    => 'Gender',
                'type'    => 'radio',
                'options' => array(
                    'm' => 'Male',
                    'f' => 'Female',
                ),
            ),
            array(
                'id'   => 'email',
                'name' => 'Email',
                'type' => 'email',
            ),
            array(
                'id'   => 'bio',
                'name' => 'Biography',
                'type' => 'textarea',
            ),
        ),
    );
    return $meta_boxes;
}

?>