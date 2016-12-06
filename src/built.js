export default ["%23%20FUNCTIONAL%20PROGRAMMING%0A%0A%23%23%20%u4EC0%u4E48%u662F%u51FD%u6570%u5F0F%u7F16%u7A0B%3F%0A%0A+%20%u547D%u4EE4%u5F0F%28imperative%29%0A+%20%u9762%u5411%u5BF9%u8C61%28object-oriented%29%0A+%20%u51FD%u6570%u5F0F%28functional%29","%0A%0A%23%23%23%20%u51FD%u6570%u5F0F%u51FD%u6570%0A%0A**%u8F93%u5165%u8F93%u51FA%3A**%0A%0A%u4E00%u4E2A%u53D8%u91CF%u88AB%u67D0%u4E2A%u89C4%u5F8B%u5904%u7406%u4EE5%u540E%u53D8%u6210%u53E6%u5916%u4E00%u4E2A%u53D8%u91CF%2C%20%u5F62%u5982*f%28x%29%20%3D%20y*.%0A%0A**%u975EFP**%3A%28%u547D%u4EE4%u5F0F%29%0A%0A%60%60%60js%0Alet%20name%20%3D%20%60Jin%60%3B%0Alet%20greeting%20%3D%20%60Hi%2C%20I%27m%20%60%3B%0Aconsole.log%28greeting%20+%20name%29%3B%0A%3D%3E%20%22Hi%2C%20I%27m%20Jin%22%0A%60%60%60%0A%0A**%u5C1D%u8BD5%3A%20%u628A%u4EE5%u4E0A%u5199%u6210FP**","%0A%23%23%23%20%u907F%u514D%u9644%u52A0%u4F5C%u7528%28side%20effect%29%0A%0A%u4EE5%u4E0B%u662F%u9519%u7684%3A%0A%0A%60%60%60js%0Alet%20name%20%3D%20%60Jin%60%3B%0Afunction%20greet%28%29%20%7B%0A%20%20console.log%28%60Hi%2C%20I%27m%20%24%7Bname%7D%60%29%3B%0A%7D%0Agreet%28name%29%3B%0A%3D%3E%20%22Hi%2C%20I%27m%20Jin%22%0A%60%60%60%0A%0A%u6B63%u786E%u7684%3A%0A%0A%60%60%60js%0Afunction%20greet%28name%29%20%7B%0A%20%20return%20%60Hi%2C%20I%27m%20%24%7Bname%7D%60%3B%0A%7D%0Aconsole.log%28greet%28%60Jin%60%29%29%3B%0A%3D%3E%20%22hi%2C%20I%27m%20Jin%22%0A%60%60%60","%0A%23%23%20FP%u7684%u7279%u6027%0A%0A%23%23%23%20immutable%20data%0A%0A%u9519%u8BEF%u7684%3A%0A%0A%60%60%60js%0Alet%20rooms%20%3D%20%5B%60r1%60%2C%20%60r2%60%2C%20%60r3%60%5D%3B%0Arooms%5B2%5D%20%3D%20%60r4%60%3B%0A%3D%3E%20%5B%60r1%60%2C%20%60r2%60%2C%20%60r4%60%5D%0A%60%60%60%0A%0A%u6B63%u786E%u7684%3A%0A%0A%60%60%60js%0Alet%20rooms%20%3D%20%5B%60r1%60%2C%20%60r2%60%2C%20%60r3%60%5D%3B%0Alet%20newRooms%20%3D%20rooms.map%28rm%20%3D%3E%20rm%20%3D%3D%20%60r3%60%20%3F%20%60r4%60%20%3A%20rm%29%3B%0AnewRooms%3B%20%3D%3D%3E%20%5B%60r1%60%2C%20%60r2%60%2C%20%60r4%60%5D%0Arooms%3B%20%3D%3D%3E%20%5B%60r1%60%2C%20%60r2%60%2C%20%60r3%60%5D%3B%0A%60%60%60%0A%0A*immutable.js*%u53EF%u4EE5%u89E3%u51B3%u6570%u636E%u526F%u672C%u7684%u95EE%u9898.","%23%23%23%20tail%20call%20optimisation/%u5C3E%u90E8%u8C03%u7528%u4F18%u5316%0A%0A%u6CA1%u4F18%u5316%u7684%3A%0A%0A%60%60%60js%0Alet%20fact%20%3D%20function%28num%29%20%7B%0A%20%20return%20num%20%3D%3D%3D%200%20%3F%201%20%3A%20num%20*%20fact%28--num%29%3B%0A%7D%0A%60%60%60%0A%0A%u5C3E%u8C03%u7528%3A%0A%0A%60%60%60js%0Alet%20fact%20%3D%20function%28num%29%20%7B%0A%20%20let%20ft%20%3D%20function%28num%2C%20accum%29%20%7B%0A%20%20%20%20return%20num%20%3D%3D%3D%200%20%3F%20accum%20%3A%20ft%28num%20-%201%2C%20num%20*%20accum%29%3B%0A%20%20%7D%0A%20%20return%20ft%28num%2C%201%29%3B%0A%7D%0A%60%60%60%0A%0Aes6%3A%0A%0A%60%60%60js%0Alet%20ft%20%3D%20function%28num%2C%20accum%20%3D%201%29%20%7B%0A%20%20return%20num%20%3D%3D%3D%200%20%3F%20accum%20%3A%20ft%28num%20-%201%2C%20num%20*%20accum%29%3B%0A%7D%0A%60%60%60","%23%23%20FP%u7684%u4F18%u70B9%0A%0A%23%23%23%20lazy%20evaluation%0A%0A%0A%0A%21%5B%5D%28imgs/lodash-naive.gif%29%0A%0A%0A%0A%21%5B%5D%28imgs/grafika.gif%29%0A%0A","%0A%23%23%20%u7F16%u5199FP%u7684%u6280%u5DE7%0A%0A%23%23%23%20higher%20order%20functions%0A%0A%u4EC0%u4E48%u662F%u9AD8%u9636%u51FD%u6570%3A%20%u53C2%u6570/%u8FD4%u56DE%u503C%u6709%u51FD%u6570.","%0A%0A%23%23%23%23%20map%0A%0Amap%u63A5%u53D7%u4E00%u4E2A%u51FD%u6570%u548C%u4E00%u4E2A%u96C6%u5408.%20%u7136%u540E%u521B%u5EFA%u4E00%u4E2A%u65B0%u7A7A%u96C6%u5408%2C%20%u5728%u6BCF%u4E2A%u96C6%u5408%u7684%u5143%u7D20%u4E0A%u8FD0%u884C%u51FD%u6570%u6765%u63D2%u5165%u7A7A%u96C6%u5408.%20%u6700%u540E%u8FD4%u56DE%u65B0%u7684%u96C6%u5408.%0A%0A%u4E0B%u9762%u662F%u4E2A%u7B80%u5355%u7684%u83B7%u53D6%u540D%u5B57%u957F%u5EA6%u7684map%3A%0A%0A%60%60%60python%0Aname_lengths%20%3D%20map%28len%2C%20%5B%22Mary%22%2C%20%22Isla%22%2C%20%22Sam%22%5D%29%0Aprint%20name_lengths%0A%23%20%3D%3E%20%5B4%2C%204%2C%203%5D%0A%60%60%60%0A%0A%u4E0B%u9762%u662F%u4E2A%u8FD4%u56DE%u5143%u7D20%u5E73%u65B9%u7684map%3A%0A%0A%60%60%60python%0Asquares%20%3D%20map%28lambda%20x%3A%20x%20*%20x%2C%20%5B0%2C%201%2C%202%2C%203%2C%204%5D%29%0Aprint%20squares%0A%23%20%3D%3E%20%5B0%2C%201%2C%204%2C%209%2C%2016%5D%0A%60%60%60","%0A%0A%u60C5%u666F%3A%20**%u79D8%u5BC6%u884C%u52A8%u4E2D%u9700%u8981%u7ED9%u7279%u5DE5%u5206%u914D%u4EE3%u53F7**%0A%0A%60%60%60python%0Aimport%20random%0Anames%20%3D%20%5B%27Mary%27%2C%20%27Isla%27%2C%20%27Sam%27%5D%0Acode_names%20%3D%20%5B%27Mr.%20Pink%27%2C%20%27Mr.%20Orange%27%2C%20%27Mr.%20Blonde%27%5D%0Afor%20i%20in%20range%28len%28names%29%29%3A%0A%20%20%20%20names%5Bi%5D%20%3D%20random.choice%28code_names%29%0Aprint%20names%0A%23%20%3D%3E%20%5B%27Mr.%20Blonde%27%2C%20%27Mr.%20Blonde%27%2C%20%27Mr.%20Blonde%27%5D%0A%60%60%60%0A%0Amap%3A%0A%0A%60%60%60python%0Aimport%20random%0Anames%20%3D%20%5B%27Mary%27%2C%20%27Isla%27%2C%20%27Sam%27%5D%0Asecret_names%20%3D%20map%28lambda%20x%3A%20random.choice%28%5B%27Mr.%20Pink%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%27Mr.%20Orange%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%27Mr.%20Blonde%27%5D%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20names%29%0A%60%60%60%0A%0A","%0A%0A%23%23%23%23%20reduce%0A%0Areduce%u63A5%u53D7%u4E00%u4E2A%u51FD%u6570%u548C%u4E00%u4E2A%u96C6%u5408.%20%u4ED6%u8FD4%u56DE%u7684%u503C%u662F%u6DF7%u5408%u4E86%u8F93%u5165%u7684%u503C.%0A%0A%u4E0B%u9762%u662F%u4E00%u4E2Areduce.%20%u4ED6%u4F1A%u8FD4%u56DE%u8F93%u5165%u96C6%u5408%u7684%u548C.%0A%0A%60%60%60python%0Asum%20%3D%20reduce%28lambda%20a%2C%20x%3A%20a%20+%20x%2C%20%5B0%2C%201%2C%202%2C%203%2C%204%5D%29%0Aprint%20sum%0A%23%20%3D%3E%2010%0A%60%60%60","%0A%0A**%u7EDF%u8BA1%60Sam%60%u51FA%u73B0%u7684%u6B21%u6570**%0A%0A%60%60%60python%0Asentences%20%3D%20%5B%27Mary%20read%20a%20story%20to%20Sam%20and%20Isla.%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%27Isla%20cuddled%20Sam.%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%27Sam%20chortled.%27%5D%0Asam_count%20%3D%200%0Afor%20sentence%20in%20sentences%3A%0A%20%20%20%20sam_count%20+%3D%20sentence.count%28%27Sam%27%29%0Aprint%20sam_count%0A%23%20%3D%3E%203%0A%60%60%60%0A%0Areduce%3A%0A%0A%60%60%60python%0Asentences%20%3D%20%5B%27Mary%20read%20a%20story%20to%20Sam%20and%20Isla.%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%27Isla%20cuddled%20Sam.%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%27Sam%20chortled.%27%5D%0Asam_count%20%3D%20reduce%28lambda%20a%2C%20x%3A%20a%20+%20x.count%28%27Sam%27%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20sentences%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%200%29%0A%60%60%60%0A%0A%u6CE8%u610F%u7B2C%u4E09%u4E2A%u53C2%u65700%2C%20%u4EE3%u8868%u521D%u59CB%u503C%2C%20%u5982%u679C%u4E0D%u8BBE%u7B2C%u4E00%u884C%u7684sam%u5C31%u4E22%u4E86.","%0A%0A**%u5C1D%u8BD5%3A%20%A0%u7528map%2C%20reduce%u548Cfilter%u91CD%u5199%u4EE5%u4E0B%u4EE3%u7801.%20filter%u63A5%u53D7%u4E00%u4E2A%u51FD%u6570%u548C%u4E00%u4E2A%u96C6%u5408%2C%20%u8FD4%u56DE%u6240%u6709%u7ECF%u8FC7%u51FD%u6570%u8FD4%u56DE%60true%60%u7684%u5143%u7D20%u7684%u96C6%u5408.**%0A%0A%60%60%60python%0Apeople%20%3D%20%5B%7B%27name%27%3A%20%27Mary%27%2C%20%27height%27%3A%20160%7D%2C%0A%20%20%20%20%7B%27name%27%3A%20%27Isla%27%2C%20%27height%27%3A%2080%7D%2C%0A%20%20%20%20%7B%27name%27%3A%20%27Sam%27%7D%5D%0Aheight_total%20%3D%200%0Aheight_count%20%3D%200%0Afor%20person%20in%20people%3A%0A%20%20%20%20if%20%27height%27%20in%20person%3A%0A%20%20%20%20%20%20%20%20height_total%20+%3D%20person%5B%27height%27%5D%0A%20%20%20%20%20%20%20%20height_count%20+%3D%201%0Aif%20height_count%20%3E%200%3A%0A%20%20%20%20average_height%20%3D%20height_total%20/%20height_count%0A%20%20%20%20print%20average_height%0A%20%20%20%20%23%20%3D%3E%20120%0A%60%60%60","%60%60%60python%0Apeople%20%3D%20%5B%7B%27name%27%3A%20%27Mary%27%2C%20%27height%27%3A%20160%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%27name%27%3A%20%27Isla%27%2C%20%27height%27%3A%2080%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%27name%27%3A%20%27Sam%27%7D%5D%0Aheights%20%3D%20map%28lambda%20x%3A%20x%5B%27height%27%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20filter%28lambda%20x%3A%20%27height%27%20in%20x%2C%20people%29%29%0Aif%20len%28heights%29%20%3E%200%3A%0A%20%20%20%20from%20operator%20import%20add%0A%20%20%20%20average_height%20%3D%20reduce%28add%2C%20heights%29%20/%20len%28heights%29%0A%60%60%60","%0A%0A%23%23%23%23%20map-reduce%u6C49%u5821%0A%0A%21%5Bmap-reduce-sandwich%5D%28imgs/mr.png%29%0A%0A+%20map%u5904%u7406%u6750%u6599%2C%20reduce%u62FC%u5408%u6750%u6599%0A+%20map%3A%20%u628A%u9EC4%u74DC%u5904%u7406%u4E86%u6210%u9EC4%u74DC%u4E1D/%u6761/%u7247/%u4EFB%u4F55%u5F62%u72B6%2C%20%u5E76%u68C0%u67E5%u8F93%u5165%u662F%u5426%u662F%u9EC4%u74DC%0A+%20reduce%3A%20%u5904%u7406%u534A%u6210%u54C1%2C%20%u6309%u987A%u5E8F%u653E/%u634F%u5728%u4E00%u8D77%u653E/%u5012%u8FC7%u6765%u653E%0A+%20%u5982%u679C%u60F3%u6539%u53D8%u5904%u7406%u65B9%u5F0F/%u62FC%u5408%u65B9%u5F0F%u5F88%u5BB9%u6613%0A+%20immutable","%23%23%23%20currying%0A%0A%60%60%60js%0Alet%20add%20%3D%20%28a%2C%20b%29%20%3D%3E%20a%20+%20b%3B%0Aadd%281%2C%202%29%3B%0Aadd%281%2C%203%29%3B%0Aadd%281%2C%204%29%3B%0A%60%60%60%0A%0A%60%60%60js%0Alet%20add%20%3D%20%28a%2C%20b%29%20%3D%3E%20a%20+%20b%3B%0Alet%20add1%20%3D%20function%28b%29%20%7B%0A%20%20return%20add%281%2C%20b%29%3B%0A%7D%0A//default%20param%0A//let%20add1%20%3D%20%28a%2C%20b%20%3D%201%29%20%3D%3E%20a%20+%20%20b%3B%0Aadd1%282%29%3B%0Aadd1%283%29%3B%0Aadd1%284%29%3B%0A%60%60%60%0A%0A%u66F4%u591A%u7684%u4F8B%u5B50%u2026%20ajax.post/get%20%u7C7B%u4F3C%u7684%u5FEB%u6377%u65B9%u6CD5.%20%u63D0%u4F9B%u5E38%u7528%u7684%u5FEB%u6377%u65B9%u6CD5.","%u67EF%u91CC%u5316%u7684%u5B9A%u4E49%3A%20%u628A%u4E00%u4E2A%u51FD%u6570%u4E2D%u7684%u67D0%u4E2A%u53EF%u9884%u671F%u7684%u53D8%u91CF%u56FA%u5B9A%2C%20%u4ECE%u800C%u4EA7%u751F%u4E00%u4E2A%u65B0%u7684%u51FD%u6570.%0A%0A%u5F53%u7136%u8FD9%u4E2A%u56FA%u5B9A%u7684%u53D8%u91CF%u53EF%u4EE5%u662F%u51FD%u6570.%20%u6240%u4EE5%u4EE5%u4E0A%u7684%u4E1C%u897F%u53EA%u662F%u67EF%u91CC%u5316%u7684%u4E00%u79CD%u5E94%u7528%u573A%u666F..%0A%0A%u67EF%u91CC%u5316%u7684%u901A%u9879%u516C%u5F0F%3A%0A%0A%60%60%60js%0Alet%20currying%20%3D%20function%28fn%2C%20...tails%29%20%7B%0A%20%20return%20function%28...args%29%20%7B%0A%20%20%20%20return%20fn%28...tails%2C%20...args%29%3B%0A%20%20%7D%0A%7D%0A//%u6253%u6BD4%u65B9%2C%20%u4E0A%u9762%u7684add1%0Alet%20add%20%3D%20%28a%2C%20b%29%20%3D%3E%20a%20+%20b%3B%0Alet%20add1%20%3D%20currying%28add%2C%201%29%3B%0Aadd1%282%29%3B%0Aadd1%283%29%3B%0A%60%60%60%0A%0A","%23%23%20%u5B9E%u4F8B%u4E00%u4E2A%0A%0A%u573A%u666F%3A%20%0A%0A%3E%203%u4E2A%u5C0F%u8F66%u8D5B%u8DD1%2C%20%u51715%u9636%u6BB5%2C%20%u6BCF%u9636%u6BB570%25%u6982%u7387%u524D%u8FDB.%20%u753B%u51FA%u6BCF%u9636%u6BB5%u540E%u7684%0A%0A%u7C7B%u4F3C%u8F93%u51FA%3A%0A%0A%60%60%60%0A%20-%0A%20-%20-%0A%20-%20-%0A%0A%20-%20-%0A%20-%20-%0A%20-%20-%20-%0A%0A%20-%20-%20-%0A%20-%20-%0A%20-%20-%20-%0A%0A%20-%20-%20-%20-%0A%20-%20-%20-%0A%20-%20-%20-%20-%0A%0A%20-%20-%20-%20-%0A%20-%20-%20-%20-%0A%20-%20-%20-%20-%20-%0A%60%60%60","%0A%0A%u4EE3%u7801%3A%0A%0A%60%60%60js%0Alet%20time%20%3D%205%3B%0Alet%20car_positions%20%3D%20%5B1%2C1%2C1%5D%3B%0Awhile%28time--%20%3E%200%29%20%7B%0A%20car_positions%20%3D%20car_positions.map%28each%20%3D%3E%20Math.random%28%29%20%3E%200.3%20%3F%20++each%20%3A%20each%29%3B%0A%20%20for%28let%20each%20of%20car_positions%29%20%7B%0A%20%20%20%20console.log%28%60-%60.repeat%28each%29%29%3B%0A%20%20%7D%0A%20%20console.log%28%60%60%29%3B%0A%7D%0A%60%60%60%0A%0A%08","%0A%0A**%u6539%u8FDB%3A**%20%u628A%u4EE3%u7801%u62C6%u5206%u6210%u58F0%u660E%u5F0F%u7684%2C%20%u5BB9%u6613%u770B%u61C2.","%0A%0A%60%60%60js%0Afunction%20move_cars%28%29%20%7B%0A%20%20car_positions%20%3D%20car_positions.map%28each%20%3D%3E%20Math.random%28%29%20%3E%200.3%20%3F%20++each%20%3A%20each%29%3B%0A%7D%0Afunction%20draw_car%28car_position%29%20%7B%0A%20%20console.log%28%60-%60.repeat%28car_position%29%29%3B%0A%7D%0Afunction%20run_step_of_race%28%29%20%7B%0A%20%20time--%3B%0A%20%20move_cars%28%29%3B%0A%7D%0Afunction%20draw%28%29%20%7B%0A%20%20console.log%28%60%60%29%3B%0A%20%20for%28let%20each%20of%20car_positions%29%20%7B%0A%20%20%20%20draw_car%28each%29%3B%0A%20%20%7D%0A%7D%0Alet%20time%20%3D%205%3B%0Acar_positions%20%3D%20%5B1%2C%201%2C%201%5D%3B%0Awhile%28time%20%3E%200%29%20%7B%0A%20%20run_step_of_race%28%29%3B%0A%20%20draw%28%29%3B%0A%7D%0A%60%60%60%0A%0A*%u53EA%u8981%u4ECE%u4E3B%u7A0B%u5E8F%u5F00%u59CB%u770B%2C%20%u51FD%u6570%u540D%u81EA%u89E3%u91CA%2C%20%u60F3%u770B%u54EA%u4E2A%u51FD%u6570%u5B9E%u73B0%u518D%u770B%u51FD%u6570%u5C31%u53EF%u4EE5*%0A%0A","**%u6539%u8FDB%3A**%20%u53BB%u9664%u72B6%u6001%20%u2014%20%u5E26%u72B6%u6001%u65B9%u6CD5%u4E0E%u73AF%u5883%u4E0E%u5176%u4ED6%u65B9%u6CD5%u8026%u5408","%0A%0A%60%60%60js%0Afunction%20move_cars%28car_positions%29%20%7B%0A%20%20return%20car_positions.map%28each%20%3D%3E%20Math.random%28%29%20%3E%200.3%20%3F%20++each%20%3A%20each%29%3B%0A%7D%0Afunction%20output_car%28car_positions%29%20%7B%0A%20%20return%20%60-%60.repeat%28car_positions%29%3B%0A%7D%0Afunction%20run_step_of_race%28%7Btime%2C%20car_positions%7D%29%20%7B%0A%20%20return%20%7B%0A%20%20%20%20time%3A%20--time%2C%0A%20%20%20%20car_positions%3A%20move_cars%28car_positions%29%0A%20%20%7D%0A%7D%0Afunction%20draw%28%7Bcar_positions%7D%29%20%7B%0A%20%20console.log%28%60%60%29%3B%0A%20%20console.log%28car_positions.map%28output_car%29.join%28%60%5Cn%60%29%29%3B%0A%7D%0Afunction%20race%28state%29%20%7B%0A%20%20draw%28state%29%3B%0A%20%20if%28state.time%20%3E%200%29%20%7B%0A%20%20%20%20race%28run_step_of_race%28state%29%29%3B%0A%20%20%7D%0A%7D%0Arace%28%7B%0A%20%20time%3A%205%2C%0A%20%20car_positions%3A%20%5B1%2C%201%2C%201%5D%0A%7D%29%0A%60%60%60%0A%0A","%u573A%u666F%3A%0A%0A%3E%20%u68C0%u67E5%u4E00%u4E2A%u5B57%u7B26%u4E32%u662F%u5426%u7B26%u5408%u89C4%u5219%0A%0A%u68C0%u67E5%u51FD%u6570%3A%0A%0A%60%60%60js%0Afunction%20zero%28%5Bs%2C%20...rest%5D%29%20%7B%0A%20%20return%20s%20%3D%3D%3D%20%220%22%20%3F%20rest.join%28%22%22%29%20%3A%20false%3B%0A%7D%0Afunction%20one%28%5Bs%2C%20...rest%5D%29%20%7B%0A%20%20return%20s%20%3D%3D%3D%20%221%22%20%3F%20rest.join%28%22%22%29%20%3A%20false%3B%0A%7D%0A%60%60%60%0A%0A%u8C03%u7528%3A%0A%0A%60%60%60js%0Afunction%20rule_sequence%28s%2C%20rules%29%20%7B%0A%20%20for%28let%20rule%20of%20rules%29%20%7B%0A%20%20%20%20s%20%3D%20rule%28s%29%3B%0A%20%20%20%20if%28%21s%29%20%0A%20%20%20%20%20%20break%3B%0A%20%20%7D%0A%20%20return%20s%3B%0A%7D%0Aconsole.log%28rule_sequence%28%220101%22%2C%20%5Bzero%2C%20one%2C%20zero%5D%29%29%3B%0Aconsole.log%28rule_sequence%28%220101%22%2C%20%5Bzero%2C%20zero%5D%29%29%3B%0A%60%60%60","**%u6539%u8FDB%3A**%20%u628A%60rule_sequence%28%29%60%u65B9%u6CD5%u6539%u6210%u9012%u5F52.","%0A%0A%60%60%60js%0Afunction%20rule_sequence%28s%2C%20%5BheadRule%2C%20...restRule%5D%29%20%7B%0A%20%20return%20%28%21s%20%7C%7C%20%21headRule%29%20%3F%20s%20%3A%20rule_sequence%28headRule%28s%29%2C%20restRule%29%3B%0A%7D%0A%60%60%60","%u573A%u666F%3A%0A%0A%3E%20%u5BF9%u4E00%u4E9B%u54C1%u724C%u4FE1%u606F%u8FDB%u884C%u67D0%u4E9B%u89C4%u5219%u7684%u6279%u91CF%u5904%u7406%0A%0A%60%60%60js%0Alet%20bands%20%3D%20%5B%7B%27name%27%3A%20%27sunset%20rubdown%27%2C%20%27country%27%3A%20%27UK%27%2C%20%27active%27%3A%20false%7D%2C%0A%20%20%20%20%20%20%20%20%20%7B%27name%27%3A%20%27women%27%2C%20%27country%27%3A%20%27Germany%27%2C%20%27active%27%3A%20false%7D%2C%0A%20%20%20%20%20%20%20%20%20%7B%27name%27%3A%20%27a%20silver%20mt.%20zion%27%2C%20%27country%27%3A%20%27Spain%27%2C%20%27active%27%3A%20true%7D%5D%3B%0Afunction%20format_bands%28bands%29%20%7B%0A%20%20return%20bands.map%28%28band%29%20%3D%3E%20%7B%0A%20%20%20%20band%5B%27country%27%5D%20%3D%20%27Canada%27%3B%0A%20%20%20%20band%5B%27name%27%5D%20%3D%20band%5B%27name%27%5D.replace%28%27.%27%2C%20%27%27%29%3B%0A%20%20%20%20band%5B%27name%27%5D%20%3D%20band%5B%27name%27%5D.toUpperCase%28%29%3B%0A%20%20%20%20return%20band%3B%0A%20%20%7D%29%0A%7D%0Abands%20%3D%20format_bands%28bands%29%3B%0Aconsole.log%28bands%29%3B%0A%60%60%60","**%u6539%u8FDB%3A**%20%20%u6539%u6210pile%u5F62%u5F0F.%20%u5BB9%u6613%u590D%u7528%u4E0E%u62D3%u5C55.%0A%0A%u76EE%u6807%3A%0A%0A%60%60%60js%0Aconsole.log%28pipeline_each%28bands%2C%20%5Bset_canada_ascountry%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20strip_punctuation_from_name%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20uppercase_name%5D%29%29%3B%0A%60%60%60","%60%60%60js%0Afunction%20clone%28t%29%20%7B%0A%20%20let%20ret%20%3D%20%7B%7D%3B%0A%20%20for%28let%20key%20in%20t%29%20%7B%0A%20%20%20%20ret%5Bkey%5D%20%3D%20t%5Bkey%5D%3B%0A%20%20%7D%0A%09return%20ret%3B%0A%7D%0Afunction%20assoc%28_d%2C%20key%2C%20value%29%20%7B%0A%20%20let%20d%20%3D%20clone%28_d%29%3B%0A%20%20d%5Bkey%5D%20%3D%20value%3B%0A%20%20return%20d%3B%0A%7D%0Afunction%20set_canada_ascountry%28band%29%20%7B%0A%20%20return%20assoc%28band%2C%20%27country%27%2C%20%27Canada%27%29%3B%0A%7D%0Afunction%20strip_punctuation_from_name%28band%29%20%7B%0A%20%20return%20assoc%28band%2C%20%27name%27%2C%20band.name.replace%28%27.%27%2C%20%27%27%29%29%3B%0A%7D%0Afunction%20uppercase_name%28band%29%20%7B%0A%20%20return%20assoc%28band%2C%20%27name%27%2C%20band.name.toUpperCase%28%29%29%3B%0A%7D%0A%60%60%60%0A%0A%60%60%60js%0Afunction%20pipeline_each%28data%2C%20fns%29%20%7B%0A%20%20return%20fns.reduce%28%28a%2C%20x%29%20%3D%3E%20a.map%28x%29%2C%20data%29%3B%0A%7D%0A%60%60%60","**%u6539%u8FDB%3A**%20%u6211%u4EEC%u53D1%u73B03%u4E2A%u8F85%u52A9%u51FD%u6570%u90FD%u662F%u5BF9%u7B2C%u4E00%u4E2A%u53C2%u6570%u7684%u67D0%u4E2A%u5B57%u6BB5%u505A%u5904%u7406%2C%20%u67EF%u91CC%u5316%u4E3A%60call%28%29%60%u6765%u4E00%u8D77%u5904%u7406.","%0A%0A%60%60%60js%0Afunction%20call%28fn%2C%20key%29%20%7B%0A%20%20return%20function%28record%29%20%7B%0A%20%20%20%20return%20assoc%28record%2C%20key%2C%20fn%28record%5Bkey%5D%29%29%3B%0A%20%20%7D%0A%7D%0Aconsole.log%28pipeline_each%28bands%2C%20%5Bcall%28x%20%3D%3E%20%27Canada%27%2C%20%27country%27%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20call%28x%20%3D%3E%20x.replace%28%27.%27%2C%20%27%27%29%2C%20%27name%27%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20call%28x%20%3D%3E%20x.toUpperCase%28%29%2C%20%27name%27%29%5D%29%29%3B%0A%60%60%60","**%u52A0%u9700%u6C42%u4E86%3A**%20%u62BD%u51FAname%u548Ccountry%u5B57%u6BB5.","%0A%0A%60%60%60js%0Afunction%20extract_name_and_country%28band%29%20%7B%0A%20%20let%20plucked%20%3D%20%7B%7D%3B%0A%20%20plucked%5B%27name%27%5D%20%3D%20band%5B%27name%27%5D%3B%0A%20%20plucked%5B%27country%27%5D%20%3D%20band%5B%27country%27%5D%3B%0A%20%20return%20plucked%3B%0A%7D%0Aconsole.log%28pipeline_each%28bands%2C%20%5Bcall%28x%20%3D%3E%20%27Canada%27%2C%20%27country%27%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20call%28x%20%3D%3E%20x.replace%28%27.%27%2C%20%27%27%29%2C%20%27name%27%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20call%28x%20%3D%3E%20x.toUpperCase%28%29%2C%20%27name%27%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20extract_name_and_country%5D%29%29%3B%0A%60%60%60","**%u6539%u8FDB%3A**%20%u62BD%u51FA%60pluck%28%29%60%u65B9%u6CD5%2C%20%u76EE%u6807%3A%0A%0A%60%60%60js%0Aconsole.log%28pipeline_each%28bands%2C%20%5Bcall%28x%20%3D%3E%20%27Canada%27%2C%20%27country%27%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20call%28x%20%3D%3E%20x.replace%28%27.%27%2C%20%27%27%29%2C%20%27name%27%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20call%28x%20%3D%3E%20x.toUpperCase%28%29%2C%20%27name%27%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20pluck%28%5B%27name%27%2C%20%27country%27%5D%29%5D%29%29%3B%0A%60%60%60","%60%60%60js%0Afunction%20pluck%28keys%29%20%7B%0A%20%20return%20function%28record%29%20%7B%0A%20%20%20%20return%20keys.reduce%28%28a%2C%20x%29%20%3D%3E%20assoc%28a%2C%20x%2C%20record%5Bx%5D%29%2C%20%7B%7D%29%3B%0A%20%20%7D%0A%7D%0A%60%60%60","%23%20%u5B8C%u4E86"]