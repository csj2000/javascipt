var qq号="1192734500";
app.startActivity({
    action: "android.intent.action.VIEW",
    data:"mqq://im/chat?chat_type=wpa&version=1&src_type=web&uin="+qq号,
    packageName: "com.tencent.mobileqq",
});//qq强制聊天
