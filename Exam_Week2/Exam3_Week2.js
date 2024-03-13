import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Exam3_Week2() {

    const data = [
        { id: 1, ten: 'Sách Toán', loai: 'Sách' },
        { id: 2, ten: 'Sách Văn', loai: 'Sách' },
        { id: 3, ten: 'Conan', loai: 'Truyện' },
        { id: 4, ten: 'Sherlock Holmes', loai: 'Tiểu thuyết' },
        { id: 5, ten: 'Doraemon', loai: 'Truyện' },
    ]

    // BÀI TẬP 3.1 DÙNG HÀM filter() lọc ra các loại sách


    // ===============================================






    // BÀI TẬP 3.2 DÙNG HÀM find() tìm sách có id là 3
    // function checkFindBook(item) {
    //     return item.id == 3;
    // }
    // let useFind = data.find(checkFindBook);
    // console.log(useFind)
    // ===============================================



    // BÀI TẬP 3.3 DÙNG HÀM some() để kiểm tra xem có loại Tiểu thuyết trong mảng hay không?
    function checkTieuThuyet(caterory) {
        return caterory.loai === "Tiểu thuyết";
    }

    let useSome = data.some(checkTieuThuyet);
    if (useSome === true) {
        console.log("Trong mảng này có loại Tiểu thuyết!");
    } else {
        console.log("Trong mảng này không có loại Tiểu thuyết!")
    }
    // ===============================================

    return (
        <View style={styles.container}>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        display: 'flex',
        alignItems: 'center'

    },



});
