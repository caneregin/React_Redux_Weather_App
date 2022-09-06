# React Redux Weather App

## Yayınlandı: https://chic-fox-039e1e.netlify.app/

## Açılış ekranı
![weatherredux](https://user-images.githubusercontent.com/36435160/188713604-ccfa6ed1-5fbe-4173-b8d1-08a6407a2428.png)

## city, cityLat, cityLon değerleri, 5 gün için 5 hava durumu ve 5 derecesi, basınç, nem, rüzgar değerleri useSelector aracılığıyla redux tarafından çekilir.
![weatherredux1](https://user-images.githubusercontent.com/36435160/188715763-f8fcd2f3-fd9f-4987-afbd-ca797cb9aafb.png)

## week ile haftanın 7 günü array şeklinde tanımlanmıştır. Arrayın sıfırıncı birinci elemanı gibi. Bugünün tarihi newDate getDay ile alınır. bu tarihin 7ye bölümünden kalan ile 5 günün hangi gün oldukları belli olur. city değeri değiştiğinde useEffect axios ile ilgili şehirin lat lon değerleri çekilir ve counter 1 artırılır. counter değiştiğinden ikinci useEffect axios ile bu lat lon değerlerine göre ilgili şehirin hava durumu değerleri çekilir. Bu değerler dispatch aracılığıyla redux tarafına gönderilir ve reducer ile karşılanır.
![weatherredux2](https://user-images.githubusercontent.com/36435160/188715816-017f4774-2a0d-436e-a31e-1f640fc4bafd.png)

## Gösterilecek veriler burada yazılmıştır.
![weatherredux3](https://user-images.githubusercontent.com/36435160/188715853-71a12839-cd04-4646-8887-99204514019e.png)

## Şehir değiştirilip submit butona tıklandığında seçilen şehir dispatch changeCity aracılığıyla redux reducer ile karşılanır.
![weatherredux4](https://user-images.githubusercontent.com/36435160/188715908-d7db69c7-8827-45cc-b16f-cf876f178ef9.png)

## initial değerler burada tanımlanmıştır. Varsayılan olarak istanbul ve istanbul lat lon değerleri yazılmıştır.
![weatherredux5](https://user-images.githubusercontent.com/36435160/188715993-78ddc51e-1c63-4743-8426-3ab212baf2a7.png)

## changeLatLon reducer ile gelen veriler initial state cityLat ve cityLon içerisine yazılır. changeCity reducer ile gelen veriler initial state city içerisine yazılır. changeWeather reducer ile gelen veriler ilgili initial state içerisine yazılır.
![weatherredux8](https://user-images.githubusercontent.com/36435160/188716703-d5908e58-99fd-44a6-a6da-bb5cb6e78da3.png)

## Redux store
![weatherredux7](https://user-images.githubusercontent.com/36435160/188716785-16fe7e1e-eb20-48ec-b20e-5e77307e3c4d.png)
