import React from "react"

const LoopComponent = ({children}, {jumlah}) => {
    const loop = () => {
        const data = []
        for (let index = 1; index < jumlah; index++) {
            data.push(
                <div key={index}>
                    {children}
                </div>
            )
        }
        return data
    }

    return loop()
}

export default LoopComponent
