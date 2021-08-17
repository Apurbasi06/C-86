     var canvas = new fabric.Canvas('myCanvas');

     player_x = 10;
     player_y = 10;

     block_image_width = 30;
     bloack_image_height = 30;

     var player_object = "";
     var block_image_objects = "";

     function player_update()
     {
         fabric.block_image_objects.fromURL("player.png", function(Img)
         {
             player_object = Img;

             player_object.scaleToWidth(150);
             player_object.scaleToHeight(140);

             player_object({
             top:player_y,
             left:player_x
             });
             canvas.add(player_object);
         });

     }

     function new_image(get_image)
     {
             fabric.get_image.fromURL(get_image, function(Img)
             {

                block_image_objects = Img;

                block_image_objects.scaleToWidth(block_image_width);
                block_image_objects.scaleToHeight(bloack_image_height);

                block_image_objects.scaleToHeight({
                    top:player_y,
                    left:player_x
                });
                
                canvas.add(block_image_objects);

             });
     }
