import React, {Component} from 'react';
import Title from './components/title';
import MuseumDetail from './components/museum-detail';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      museum: {
        "count": 2,
        "next": "https://www.cultura.gob.ar/api/v2.0/museos/?format=api&limit=20&offset=20",
        "previous": null,
        "results": [
            {
                "id": 27,
                "url": "https://www.cultura.gob.ar/api/v2.0/organismos/27/?format=api",
                "link": "https://www.cultura.gob.ar/institucional/organismos/museos/comision-nacional-de-la-manzana-de-las-luces/",
                "nombre": "Complejo Histórico Cultural Manzana de las Luces",
                "direccion": "Perú 222, Ciudad de Buenos Aires",
                "telefono": "+54 (011) 4342-9930 / 6973",
                "descripcion": "<p>El Complejo Hist&oacute;rico Cultural Manzana de las Luces depende del Ministerio de Cultura de la Naci&oacute;n.</p>\r\n<p>Fue creada en 1971 por el Decreto n&ordm; 4657/71 y ampliadas sus funciones por los decretos: 1185/73; 1454/74 y 1479/81. El decreto 108/2013 cambia su nombre de Comisi&oacute;n Nacional a Complejo Hist&oacute;rico Cultural Manzana de las Luces.</p>\r\n<p>Son sus objetivos la restauraci&oacute;n y conservaci&oacute;n de los edificios hist&oacute;ricos; la investigaci&oacute;n con relaci&oacute;n a instituciones, acontecimientos y personajes que desfilaron por la Manzana de las Luces; y la refuncionalizaci&oacute;n de los edificios a trav&eacute;s de la actividad cultural.</p>",
                "email": "cnml@manzanadelasluces.gov.ar",
                "provincia": "",
                "depende_de": "Secretaría de Cultura de la Nación",
                "autoridad": null
            },
            {
                "id": 28,
                "url": "https://www.cultura.gob.ar/api/v2.0/organismos/28/?format=api",
                "link": "https://www.cultura.gob.ar/institucional/organismos/museos/estancia-de-jesus-maria-museo-jesuitico-nacional/",
                "nombre": "Estancia de Jesús María - Museo Jesuítico Nacional",
                "direccion": "Pedro de Oñate s/n, Jesús María, Córdoba",
                "telefono": "+54 (03525) 420126",
                "descripcion": "<p><strong>La estancia</strong></p>\r\n<p>La Compa&ntilde;&iacute;a de Jes&uacute;s llega a la provincia de C&oacute;rdoba, en la actual Argentina en 1599. En 1608 crean el Noviciado y dos a&ntilde;os despu&eacute;s se declara al Colegio de C&oacute;rdoba como Colegio M&aacute;ximo. Debido a algunos problemas econ&oacute;micos que se presentan, comienzan a adquirir establecimientos o tierras que destinar&aacute;n a la explotaci&oacute;n rural, en diversos lugares de la provincia.</p>\r\n<p>A&ntilde;os m&aacute;s tarde, estos convertidos en estancias colaboraron con el sost&eacute;n econ&oacute;mico de los colegios de la Orden en la capital cordobesa. El 15 de enero de 1618, el R.P. Pedro de Orate, provincial de la Orden, compra al Alf&eacute;rez Real Don. Gaspar de Quevedo, las tierras en el lugar que los abor&iacute;genes denominaban \"Guanusacate\". Ya en la escritura de compra se cita la existencia de veinte mil cepas de vi&ntilde;a, algunas construcciones y un molino. La producci&oacute;n de Jes&uacute;s Mar&iacute;a, se orient&oacute; as&iacute;, principalmente a la elaboraci&oacute;n de vino. Tambi&eacute;n, se realizaban otras actividades como: crianza de ganado vacuno, tejido en telares de cordellate, fabricaci&oacute;n y jab&oacute;n y velas y trabajos en la huerta de la que se obten&iacute;an: manzanas, granadas, duraznos, cebada, azafr&aacute;n, garbanzos, lentejas, habas y arvejas.</p>\r\n<p>Adem&aacute;s, de sementeras de trigo, ma&iacute;z, Durante el primer tercio del siglo XVIII, comenz&oacute; la construcci&oacute;n de los sectores m&aacute;s destacados del edificio. Seg&uacute;n cita un documento de la &eacute;poca inauguraron la nueva bodega, el refectorio y ocho cuartos.</p>\r\n<p>Frente al presbiterio se encuentra la c&uacute;pula en cuyos entablamentos hay cuatro &aacute;ngeles de fisonom&iacute;a nativa y cuatro cabezas con tocados abor&iacute;genes. Los detalles ornamentales del frente del Templo no estaban terminados antes de la expulsi&oacute;n. En 1767, con la Real Pragm&aacute;tica de Carlos III, rey de Espa&ntilde;a, los jesuitas son expulsados de los reinos de Espa&ntilde;a, Portugal y N&aacute;poles y todas sus posesiones pasan a ser administradas por la denominada Junta de Temporalidades. Desde la expulsi&oacute;n de la Compa&ntilde;&iacute;a hasta 1775, la estancia fue administrada por la citada Junta. Por &uacute;ltimo, sale a remate en tres oportunidades y los interesados forman parte de la familia de don F&eacute;lix Correas, originaria de Mendoza, quienes finalmente la compran.</p>\r\n<p>&nbsp;</p>\r\n<p><strong>El museo</strong></p>\r\n<p>En 1941, la Comisi&oacute;n Nacional de Museos y Monumentos y Lugares Hist&oacute;ricos declara a la antigua estancia como Monumento Hist&oacute;rico Nacional (Decreto N&ordm; 90732). Posteriormente, comienzan las tareas de restauraci&oacute;n y puesta en funcionamiento del edificio y el 18 de mayo de 1946 se instala en su interior el Museo. Este tiene, actualmente, dieciocho salas de exposici&oacute;n distribuidas entre planta baja y primer piso. En la exhibici&oacute;n permanente de sus colecciones de gran importancia hist&oacute;rica y art&iacute;stica, se destacan: la de Arte Sacro Colonial de los siglos XVII Y XVIII y el material de Arqueolog&iacute;a y Etnograf&iacute;a del Noroeste y Centro Argentino con colecciones que van desde el a&ntilde;o 300 a. C. hasta el siglo XVI.</p>\r\n<p>Tambi&eacute;n se pueden ver; Grabados Europeos, monedas, medallas, Mobiliario civil y religioso europeo y americano, porcelanas y cer&aacute;micas europeas, todos de diversos per&iacute;odos. En esta Instituci&oacute;n se realizan durante el a&ntilde;o: conciertos, conferencias, talleres, seminarios, presentaciones de libros y exposiciones temporarias. Desde el a&ntilde;o 2000, integra con la Manzana jesu&iacute;tica de C&oacute;rdoba y el conjunto de estancias de la provincia, la Lista de Patrimonio Mundial de la UNESCO.</p>",
                "email": "mjn-jm@coop5.com.ar",
                "provincia": "",
                "depende_de": "Secretaría de Cultura de la Nación",
                "autoridad": null
            }]}
    };
}

componentDidMount() {

  this.setState({loading: true})

  let url = 'https://www.cultura.gob.ar/api/v2.0/museos';

  let headers = new Headers();

  headers.append('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDM4MDMxOTgsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJqdXJ5dW1hbmNodWtAZ21haWwuY29tIn0.ySPEPpFKcVq9OSsvZUiNEpLqZn47czHCMEFfQFhj0MDmcIhREfA18kMpbjsf68b6S3YgxDIBFM3Ywvb8CJDR0Q');

  fetch(url, { method:'GET',
  headers: headers, 
  })
  .then(response =>  response.json())
  .then(resData => {
     this.setState({ 
       loading: false,
       museum: resData,
      }); //this is an asynchronous function
  })
}

render() {

  if(this.state.loading){
    return (
        <div className="titulo">Cargando....</div>
    );
  }

  return (
    console.log(this.state.museum.results),
    
    <div class="container">
      <image src="/flag.png"></image>
      <image src="/mcultura.png"></image>
      <Title nombre="Listado de Museos Argentina" />
  <div class="row">
  
    <MuseumDetail records = {this.state.museum.results} />
 

  </div>
    </div>
)}  


}

export default App;
