# AmetekTest
A program typescript és express -ben lett írva. 
Mikor megnyitja a GitHub oldalt a -Package- cím alatt található a Docker-image letöltésének a parancs sora.
Ezt beillesztve a Windiws PowerShell -be letölti az image-t a parancssor.
A Docker Desktop alkalmazásban mikor futtatja az image-t, és mikor kéri a program, hogy egy új Container-ben fusson, Irja be az Optional settings -be a portot, ami -9876-
Látható mellette a 9876/tcp, viszon nem tudom, hogy miért de ha nincs kitöltve az a mező nem működik.

Miután beírta a portot és elindult az URL-t kell bevinni a böngészőbe.
Az URL: 

localhost:9876/fizzbuzz/From/i/To/j

i = a kezdő szám (szám)
j = meddig írja ki a számot (szám)

Mivel GET endpoint -ot kellett használni, az URL-en keresztül lehet megadni az értékeket.

Az eredményt a Docker Desktop console -ban is kírja és a böngészőben is, JSON alakban.
