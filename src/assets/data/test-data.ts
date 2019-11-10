
export interface IFireBall{
    count: string;
    fields: Ifields;
    signature: ISignature;
    data: IData;

}

export interface Ifields{
    
}

export interface IData{
    date: string;
    energy?: number;
    impactE?: number;
    latitude:number;
    latitudeDirection:string;
    longitude: number;
    LongitudeDirection:string;
    velocity?: number;
}

export interface ISignature{
    source: string;
    version: string;
}


export const fireBallTestData = {
    "signature": {
        "source": "NASA/JPL Fireball Data API",
        "version": "1.0"
    },
    "count": "8",
    "fields": [
        "date",
        "energy",
        "impact-e",
        "lat",
        "lat-dir",
        "lon",
        "lon-dir",
        "alt",
        "vel"
    ],
    "data": [
        [
            "2019-10-22 22:21:15",
            "2.7",
            "0.095",
            "12.0",
            "N",
            "76.0",
            "W",
            "40.7",
            null
        ],
        [
            "2019-10-10 16:16:36",
            "20.6",
            "0.57",
            "44.3",
            "N",
            "122.9",
            "E",
            "47.3",
            "14.1"
        ],
        [
            "2019-09-28 10:40:20",
            "2.3",
            "0.082",
            "12.5",
            "S",
            "107.2",
            "W",
            "52",
            "20.4"
        ],
        [
            "2019-09-27 13:35:46",
            "3.4",
            "0.12",
            "25.7",
            "N",
            "28.4",
            "W",
            null,
            null
        ],
        [
            "2019-09-14 12:39:34",
            "10.9",
            "0.33",
            "38.6",
            "S",
            "33.5",
            "W",
            "38",
            "15.9"
        ],
        [
            "2019-09-13 02:02:04",
            "4.2",
            "0.14",
            "18.6",
            "S",
            "126.9",
            "E",
            "27.4",
            "13.5"
        ],
        [
            "2019-09-12 12:49:48",
            "16.9",
            "0.48",
            "54.5",
            "N",
            "9.2",
            "E",
            "42",
            "18.5"
        ],
        [
            "2019-09-12 02:34:58",
            "5.9",
            "0.19",
            "24.9",
            "N",
            "47.8",
            "W",
            "30.6",
            "17.2"
        ]
    ]
}