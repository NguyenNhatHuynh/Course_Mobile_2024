import { StyleSheet, View } from "react-native"

function Exam7_Week2() {
    const chiso = [10, 9, 9]
    const data = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"
        , "A", "S", "D", "F", "G", "H", "J", "K", "L"
        , "?123", "Z", "X", "C", "V", "B", "N", "M", "."]
    let count = 0
    return (
        <View style={style.container}>
            {chiso.map((itemchiso) => {
                count += itemchiso
                return (
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        {data.map((item, index) => {
                            if (index < count && index >= count - itemchiso) {
                                return (
                                    <View style={{ ...style.banphim, ...((index == 19 || index == 27) && { backgroundColor: "#CACCD3" }) }}>{item}</View>
                                )
                            }

                        })}
                    </View>
                )
            })}
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        backgroundColor: "#E8EAED"
    },
    banphim: {
        backgroundColor: "#FFFFFF",
        padding: "10px",
        margin: "5px",
        borderRadius: "5px",
        fontWeight: 500
    }
})
export default Exam7_Week2