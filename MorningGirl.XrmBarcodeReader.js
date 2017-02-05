// OnloadEventに登録して、フォームが開いた際に、BarcordReaderを呼び出し
// 対象フィールドに読み取ったバーコードの値を設定する
function BarcordReader(targetField)
{
    // とりあえずモバイル以外は終了
    if(Xrm.Page.context.client.getClient() != "Mobile")
    {
        return;
    }
    // バーコードリーダー実行
    Xrm.Utility.getBarcodeValue().then(
        // Success CallBack
        // resultが読み取ったバーコードの文字列
        function (result)
        {
            Xrm.Page.getAttribute(targetField).setValue(result);
        },
        // Error CallBack
        function(error)
        {
            Xrm.Utility.alertDialog(error.message);
        }
    );
}