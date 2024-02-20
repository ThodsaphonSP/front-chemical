import {useEffect, useState} from "react";
export interface UnitOfMeasurement {
    id: number;
    name: string;
}
export default function UnitOfMeasurementAPI() {
    const [unitOfMeasurements, setUnitOfMeasurements] = useState<UnitOfMeasurement[]>([]);

    useEffect(() => {
            fetch("http://localhost:5249/api/UnitOfMeasurement")
                .then(response => response.json())
                .then((result: UnitOfMeasurement[]) => {
                    setUnitOfMeasurements(result);
                }).catch(error => {
                console.error('Error fetching categories:', error);
            });
        }
    )
    return unitOfMeasurements;
}
