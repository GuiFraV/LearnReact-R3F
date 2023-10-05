export default function Experience()
{
    return <>
        
            <mesh position-x={-3} scale={ 1.5 } >
                <sphereGeometry scale={ 1.5 }/>
                <meshBasicMaterial color='orange' />
            </mesh>
            <mesh position-x={3} scale={ 1.5 } >
                <boxGeometry scale={ 1.5 }/>
                <meshBasicMaterial color='purple' />
            </mesh>
            <mesh scale={ 10 } >
                <planeBufferGeometry scale={ 1.5 }/>
                <meshBasicMaterial color='green' />
            </mesh>
       
    </>
}