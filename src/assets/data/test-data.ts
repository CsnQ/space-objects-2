
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
    "count": "2",
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
        ]
    ]
}