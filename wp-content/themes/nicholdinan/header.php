<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php wp_title(); ?></title>
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-lazyload/8.7.1/lazyload.min.js"></script> -->
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?> >
	<div class="site-container">
		<header class="main-header">
			<nav>
            <?php 
                $defaults = array(
                    'container' => false,
                    'theme_location' => 'nicholdinan-menu',
                    'menu_class' => 'navigation',
                );
                wp_nav_menu( $defaults );
            ?>
            </nav>
        </header>