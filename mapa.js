
alert("Bienvenido");

var map = L.map('map').setView([19.42847, -99.12766], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById('select-location').addEventListener('change',function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,15);
});


L.marker([19.35529, -99.06224]).addTo(map)
    .bindPopup('Iztapalapa.')
    .openPopup();

var circle = L.circle([19.44361, -99.10499], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map)
    .bindPopup('Venustiano Carranza')
    .openPopup();

    //Cargando archivos desde el excel.

    class Excel {
        constructor(content){
            this.content= content
        }
        header(){
            return this.content[0]
        }
    
        rows(){
            return new RowCollection(this.content.slice(0,this.content.length))
        }
    }
    class RowCollection{
        constructor(rows){
            this.rows=rows
        }
        
        get(index){
            return new Row(this.rows[index])
        }
    
        count(){
            return this.rows.length
        }
    }
    class Row{
        constructor(row){
            this.row=row
        }
    
       
        colonia1(){
            return this.row[5]
        }
        latitud1(){
            return this.row[6]
        }
        longitud1(){
            return this.row[7]
        }
       
    
    }
    //clase que pondra datos de excel en la tabla
    
    class ExcelPinter{
        static print(tableId, excel){
            const table= document.getElementById(tableId)
            //Imprime cabecera
         // excel.header().forEach(title=>{
            //table.querySelector("thead>tr").innerHTML += `<td>${title}</td>`
         //  })
         
           //imprime datos
          for (let index = 0; index < excel.rows().count(); index++) {
            const row = excel.rows().get(index);
    
            table.querySelector('tbody').innerHTML += `
            <tr>
              
                <td>${row.colonia1()}</td>
                <td>${row.latitud1()}</td>
                <td>${row.longitud1()}</td>
                
            </tr>
            `
            
          }
        }
    }
    
    const excelInput= document.getElementById('excel-input')
    
    //Evento con el cual obtenemos datos de excel
    
    excelInput.addEventListener('change', async function(){
        const content= await readXlsxFile(excelInput.files[0])
    
       const excel= new Excel(content)
       
       console.log(ExcelPinter.print('excel-table', excel))
    
    
    })
