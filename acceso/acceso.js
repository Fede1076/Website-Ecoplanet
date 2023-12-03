document.addEventListener('DOMContentLoaded', function() {
    let calendarEl = document.getElementById('calendar');
    let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale:"es",
    headerToolbar:{
        left:"prev,next today BotonSolicitud",
        center:"title",
        right:"dayGridMonth,timeGridWeek"
    },
    customButtons:{
        BotonSolicitud:{
            text:"Solicitar",
            click:function(){
                $("#modalAccess").modal("show");
            }
        }
    },
    dateClick:function(info){
        $("#modalAccess").modal("show");
    },
    events:[
        {
            title:"Solicitar dia",
            start:"2023-12-10 12:30:00",
            end:"2023-12-13 12:30:00",
            color:"#FFCCAA",
            textColor:"#000000"
        },{

        }
    ]
    });
    calendar.render();
});

