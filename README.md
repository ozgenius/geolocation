# geolocation
$ ionic plugin add cordova-plugin-geolocation
$ npm install --save @ionic-native/geolocation
komutlarıyla cordova plugin ve node network modulu kurulumu

app.module.ts dosyasında
import { Geolocation } from '@ionic-native/geolocation'; işleminden sonra provider alanına providers: [ ..... Geolocation, .... ] tanımla home.ts de kullanım örneği
