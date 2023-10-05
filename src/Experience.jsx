export default function Experience()
{
    return <>
        <mesh>
            <sphereGeometry args={[1.5, 32, 32]}/>
            <meshBasicMaterial args={[ { color: 'red', wireframe: true} ]}/>
        </mesh>
    </>
}