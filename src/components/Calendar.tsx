import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment';
import { useState } from "react";
import withDragAndDrop, { withDragAndDropProps } from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import useSWR from 'swr'
import { useRouter } from "next/router";
import { sendToken } from "../utils/googleApis";
import { trpc } from "../utils/trpc";


const fetcher = (...args) => fetch(...args).then((res) => res.json())
const localizer = momentLocalizer(moment);

const MyCalendar = (props) => {
    const router = useRouter();
    // const {data , error} = useSWR('api/consent', fetcher);
    

    
    const handleClick =  async () => {
        // const res = await fetch('api/consent')
        // const url = await res.json();
        // router.push(url)
        
        console.log(data);
        console.log(status);
    }
    
    const url = router.asPath;
    const token = url.match(/code=/)
    if(token){
        fetch("api/setCredentials", {
            method: "POST",
            mode: "cors",
            credentials: 'same-origin',
            body: JSON.stringify({credential:token.input})
        })
    }
    


    const [events, setEvents] = useState<Event[]>([
        {
            title: 'Learn cool stuff',
            start: new Date(),
            end: new Date(),
        },
    ])

    const onEventResize: withDragAndDropProps['onEventResize'] = data => {
        const { start, end } = data

        setEvents(currentEvents => {
            const firstEvent = {
                start: new Date(start),
                end: new Date(end),
            }
            return [...currentEvents, firstEvent]
        })
    }

    const onEventDrop: withDragAndDropProps['onEventDrop'] = data => {
        console.log(data)
    }

    return (
        <div>
            <DnDCalendar
                localizer={localizer}
                events={events}
                style={{ height: "60vh" }}
                className="w-[60vw] h-[60vh]"

            />
            <button onClick={handleClick}>Authorize</button>
        </div>
    )
}







const DnDCalendar = withDragAndDrop(Calendar)

export default MyCalendar;