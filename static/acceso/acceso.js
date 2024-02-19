//calendario
document.addEventListener('DOMContentLoaded', function() {
    let calendarEl = document.getElementById('calendar');
    let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale:"es",
    //button header
    headerToolbar:{
        left:"title",
        center:"",
        right:"prev,next"
    },
    //button footer
    footerToolbar:{
        left:"today"
    },
    //funcion para agregar un evento dando click a una casilla
    dateClick:function(info){
        $("#modalAccess").modal("show");
        console.log(info);
        calendar.addEvent({title:"evento x", date:info.dateStr});
    },
    //funcion para mostrar datos en consola 
    eventClick:function(info) {
        console.log(info);
        console.log(info.event.title);
        console.log(info.event.start);

        console.log(info.event.end);
        console.log(info.event.textColor);
        console.log(info.event.backgroundColor);
        //console.log para mostrar un evento extendido que no es propio de fullcalendar
        console.log(info.event.extendedProps.descripcion);
    },
    //eventos agregados al calendario
    events:[
        {
            title:"Solicitar dia",
            start:"2023-12-10 12:30:00",
            end:"2023-12-13 12:30:00",
            color:"#FFCCAA",
            textColor:"#000000",
            descripcion:"descripción evento"
        },{

        }
    ]
    });
    //renderizado del calendario en la pantalla
    calendar.render();
});

