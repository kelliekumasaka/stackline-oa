import { HttpResponse, http } from 'msw'
import * as dummyData from '../assets/stackline_frontend_assessment_data_2021.json'


export const handlers = [
    http.get('https://stackline.com/api/v1', () => {
        return HttpResponse.json(dummyData)
    })
]
