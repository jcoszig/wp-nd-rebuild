<!-- This is intended for static pages such as 'about' remove about.php if used... -->

<?php get_header() ?>
<?php if ( have_posts() ) : the_post(); ?>

    <body class='test'>
        <h1>this is a test. I am page.php intended for use with the about page. </h1>
        <h1><?php the_title(); ?></h1>
        <div><?php the_content(); ?></div>
    </body>
    
<?php endif; ?>
<?php get_footer() ?>