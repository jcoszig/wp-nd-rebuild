<?php
$prefix = '_ND_'; 

$sliderSpeed = rwmb_meta( $prefix . 'slider_speed');
$sliderSpeedFullCycle = $sliderSpeed * 3;

$images = rwmb_meta( $prefix . 'home_images', array( 'size' => 'full' ) );
$returnFirstImg = rwmb_meta( 'info', array( 'limit' => 1 ) );
$firstImg = reset( $images );

get_header() ?>
    <div class="intro-foreground">
        <h1 class="centre-text clip-text" style="background-image: url(<?php echo $firstImg['url']; ?>)">
            Illustrations by Nichol Dinan
        </h1>
    </div>
        <!--Background Images -->
        <section class="background-imgs">
          <!--List items for images -->
            <ul class="landingPage-slider"> 
            <?php $i = 0;
                foreach ( $images as $image ) : $i++ ?> 
                <li data-responsive-background-image 
                    data-index="<?php echo $i; ?>" 
                    data-speed="<?php echo $sliderSpeedFullCycle ?>">
                    <img src="<?php echo $image["url"]; ?>"   
                        sizes="100vw"
                        srcset="<?php echo $image['srcset']; ?>" 
                    />
                </li>
            <?php endforeach ?>
            </ul>
        </section>

		<div class="current-work">
        <?php foreach ( $images as $image ) : $f++ ?>
			<h2 data-index="<?php echo $f; ?>" 
                data-speed="<?php echo $sliderSpeedFullCycle ?>">
                CURRENT WORK: <?php echo $image['title']; ?>
            </h2>
        <?php endforeach ?>
        </div>		
    </div> <!-- container --> 										
</body>
<?php get_footer() ?>
