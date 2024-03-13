import { View, StyleSheet, Input } from "react-native"
// import { TextInput } from "react-native-gesture-handler";
import { TextInput } from "react-native";

function Exam6_Week2() {
    const theboc = [1, 2, 3, 4]
    const data = [7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", 0, ".", "=", "+"];

    return (
        <View>
            <View style={style.container}>
                <View style={{ textAlign: "center" }}>Máy Tính</View>
                <View style={{ flexDirection: "row" }}>
                    <TextInput style={{
                        marginLeft: "5px", marginTop: "5px", width: "110px", height: "40px",
                        borderColor: "gray", borderWidth: 1, borderRadius: "10px"
                    }} />
                    <View style={style.banphim}>C</View>
                </View>
                {theboc.map((dataa) => {
                    return (
                        <View style={{ flexDirection: "row" }}>
                            {data.map((item, index) => {
                                if (index < dataa * 4 && index >= (dataa - 1) * 4) {
                                    return (
                                        <View style={style.banphim}>{item}</View>
                                    )
                                }
                            })}
                        </View>
                    )

                })}
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        borderColor: "gray",
        borderWidth: 1,
        width: "100%",
        margin: "auto",
        borderRadius: "20px",

    },
    banphim: {
        padding: "10px",
        borderRadius: "50%",
        borderColor: "gray",
        borderWidth: 1,
        margin: "5px"
    }

})
export default Exam6_Week2
