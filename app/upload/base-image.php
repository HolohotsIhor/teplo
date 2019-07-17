<?php

	$name = time().".gif";
	$check_save = @file_put_contents($name, base64_decode($_POST["data"]));

	if($check_save) {
	
		echo "Файл успешно сохранен. Адрес для просмотра - /upload/".$name;
		
	} else {
	
		echo "Ошибка в сохранении!";
		
	}
	
?>
