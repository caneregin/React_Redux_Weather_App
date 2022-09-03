import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { changeLatLon, changeCity, changeWeather } from "../redux/weatherApp/weatherSlice"
import { Formik } from 'formik'
import { useSelector } from "react-redux"
import "../App.css"

function Body() {
    const dispatch = useDispatch()
    const [counter, setCounter] = useState(0)
    const city = useSelector((state) => state.weather.city)
    const cityLat = useSelector((state) => state.weather.cityLat)
    const cityLon = useSelector((state) => state.weather.cityLon)
    const mainWeather1 = useSelector((state) => state.weather.mainWeather1)
    const mainWeather2 = useSelector((state) => state.weather.mainWeather2)
    const mainWeather3 = useSelector((state) => state.weather.mainWeather3)
    const mainWeather4 = useSelector((state) => state.weather.mainWeather4)
    const mainWeather5 = useSelector((state) => state.weather.mainWeather5)
    const tempMax1 = useSelector((state) => state.weather.tempMax1)
    const tempMax2 = useSelector((state) => state.weather.tempMax2)
    const tempMax3 = useSelector((state) => state.weather.tempMax3)
    const tempMax4 = useSelector((state) => state.weather.tempMax4)
    const tempMax5 = useSelector((state) => state.weather.tempMax5)
    const pressure = useSelector((state) => state.weather.pressure)
    const humidity = useSelector((state) => state.weather.humidity)
    const weatherWind = useSelector((state) => state.weather.weatherWind)
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const day = today.getDay()
    const firstDay = week[day]
    const secondDay = week[((day + 1) % 7)]
    const thirdDay = week[((day + 2) % 7)]
    const fourthDay = week[((day + 3) % 7)]
    const fifthDay = week[((day + 4) % 7)]
    useEffect(() => {
        axios("https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=d63ec4fba64dabc8a33d4aa5fc2e5e72")
            .then((res) => dispatch(changeLatLon(res.data)))
            .catch((e) => console.log(e))
            .finally(() => setCounter(counter+1))
    }, [city])
    useEffect(() => {
        axios("https://api.openweathermap.org/data/2.5/forecast?lat=" + cityLat + "&lon=" + cityLon + "&appid=d63ec4fba64dabc8a33d4aa5fc2e5e72")
            .then((res) => dispatch(changeWeather(res.data)))
            .catch((e) => console.log(e))
    }, [counter])

    return (
        <div>
            <div className="weatherCardMain">
                <div className='weatherCard'>
                    <div className='cityDiv'><p>{city}</p></div>

                    <div className='weatherimgname'><img src={`${mainWeather1}.png`} /><p className='mainp'>{mainWeather1}</p></div>
                    <div className='weatherC'><p>{parseInt(tempMax1 - 273.15)}°C</p></div>
                    <div className='weatherdetail'><p>Wind: {weatherWind}kmph</p><p>Humidity: {humidity}%</p><p>Pressure: {pressure}mb</p></div>
                    <div className='temp'></div>
                    <div className='weather5day'><p>{firstDay}</p><p className='pimg'><img style={{height:"50px",width:"50px"}} src={`${mainWeather1}.png`} /></p><p className='ptmp'>{parseInt(tempMax1 - 273.15)}</p></div>
                    <div className='weather5day'><p>{secondDay}</p><p className='pimg'><img style={{height:"50px",width:"50px"}} src={`${mainWeather2}.png`} /></p><p className='ptmp'>{parseInt(tempMax2 - 273.15)}</p></div>
                    <div className='weather5day'><p>{thirdDay}</p><p className='pimg'><img style={{height:"50px",width:"50px"}} src={`${mainWeather3}.png`} /></p><p className='ptmp'>{parseInt(tempMax3 - 273.15)}</p></div>
                    <div className='weather5day'><p>{fourthDay}</p><p className='pimg'><img style={{height:"50px",width:"50px"}} src={`${mainWeather4}.png`} /></p><p className='ptmp'>{parseInt(tempMax4 - 273.15)}</p></div>
                    <div className='weather5day'><p>{fifthDay}</p><p className='pimg'><img style={{height:"50px",width:"50px"}} src={`${mainWeather5}.png`} /></p><p className='ptmp'>{parseInt(tempMax5 - 273.15)}</p></div>

                </div>
            </div>
            <div className='weatherCardMain'>
                <Formik
                    initialValues={{
                        city: "İstanbul"
                    }}
                    onSubmit={(values) => {
                        dispatch(changeCity(values.city))
                        setCounter(counter + 1)
                    }}
                >
                    {({ handleSubmit, handleChange, values }) =>
                        <form onSubmit={handleSubmit}>
                            <select name="city" onChange={handleChange}>
                                <option value="İstanbul">İstanbul</option>
                                <option value="Ankara">Ankara</option>
                                <option value="İzmir">İzmir</option>
                                <option value="Adana">Adana</option>
                                <option value="Adıyaman">Adıyaman</option>
                                <option value="Afyonkarahisar">Afyonkarahisar</option>
                                <option value="Ağrı">Ağrı</option>
                                <option value="Aksaray">Aksaray</option>
                                <option value="Amasya">Amasya</option>
                                <option value="Antalya">Antalya</option>
                                <option value="Ardahan">Ardahan</option>
                                <option value="Artvin">Artvin</option>
                                <option value="Aydın">Aydın</option>
                                <option value="Balıkesir">Balıkesir</option>
                                <option value="Bartın">Bartın</option>
                                <option value="Batman">Batman</option>
                                <option value="Bayburt">Bayburt</option>
                                <option value="Bilecik">Bilecik</option>
                                <option value="Bingöl">Bingöl</option>
                                <option value="Bitlis">Bitlis</option>
                                <option value="Bolu">Bolu</option>
                                <option value="Burdur">Burdur</option>
                                <option value="Bursa">Bursa</option>
                                <option value="Çanakkale">Çanakkale</option>
                                <option value="Çankırı">Çankırı</option>
                                <option value="Çorum">Çorum</option>
                                <option value="Denizli">Denizli</option>
                                <option value="Diyarbakır">Diyarbakır</option>
                                <option value="Düzce">Düzce</option>
                                <option value="Edirne">Edirne</option>
                                <option value="Elazığ">Elazığ</option>
                                <option value="Erzincan">Erzincan</option>
                                <option value="Erzurum">Erzurum</option>
                                <option value="Eskişehir">Eskişehir</option>
                                <option value="Gaziantep">Gaziantep</option>
                                <option value="Giresun">Giresun</option>
                                <option value="Gümüşhane">Gümüşhane</option>
                                <option value="Hakkâri">Hakkâri</option>
                                <option value="Hatay">Hatay</option>
                                <option value="Iğdır">Iğdır</option>
                                <option value="Isparta">Isparta</option>
                                <option value="Kahramanmaraş">Kahramanmaraş</option>
                                <option value="Karabük">Karabük</option>
                                <option value="Karaman">Karaman</option>
                                <option value="Kars">Kars</option>
                                <option value="Kastamonu">Kastamonu</option>
                                <option value="Kayseri">Kayseri</option>
                                <option value="Kırıkkale">Kırıkkale</option>
                                <option value="Kırklareli">Kırklareli</option>
                                <option value="Kırşehir">Kırşehir</option>
                                <option value="Kilis">Kilis</option>
                                <option value="Kocaeli">Kocaeli</option>
                                <option value="Konya">Konya</option>
                                <option value="Kütahya">Kütahya</option>
                                <option value="Malatya">Malatya</option>
                                <option value="Manisa">Manisa</option>
                                <option value="Mardin">Mardin</option>
                                <option value="Mersin">Mersin</option>
                                <option value="Muğla">Muğla</option>
                                <option value="Muş">Muş</option>
                                <option value="Nevşehir">Nevşehir</option>
                                <option value="Niğde">Niğde</option>
                                <option value="Ordu">Ordu</option>
                                <option value="Osmaniye">Osmaniye</option>
                                <option value="Rize">Rize</option>
                                <option value="Sakarya">Sakarya</option>
                                <option value="Samsun">Samsun</option>
                                <option value="Siirt">Siirt</option>
                                <option value="Sinop">Sinop</option>
                                <option value="Sivas">Sivas</option>
                                <option value="Şırnak">Şırnak</option>
                                <option value="Tekirdağ">Tekirdağ</option>
                                <option value="Tokat">Tokat</option>
                                <option value="Trabzon">Trabzon</option>
                                <option value="Tunceli">Tunceli</option>
                                <option value="Şanlıurfa">Şanlıurfa</option>
                                <option value="Uşak">Uşak</option>
                                <option value="Van">Van</option>
                                <option value="Yalova">Yalova</option>
                                <option value="Yozgat">Yozgat</option>
                                <option value="Zonguldak">Zonguldak</option>
                            </select>
                            <button type='submit'>submit</button>
                        </form>}
                </Formik>
            </div>
        </div>
    )
}

export default Body