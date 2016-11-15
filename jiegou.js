/**
 * Created by Dell on 2016/11/11.
 */
function margin() {
    const left = 1, right = 2, top1 = 3, bottom = 4;
    return { left, right, top1, bottom };
}
const {left,top1} = margin();

var html = `<li class="item">
				<div class="item-img">
					<img src="{#src#}">
				</div>
				<div class="item-detail">
					<p class="cmt">{#content#}</p>
					<a href="javascript:;" class="scan-btn" data-cmt-id="{#id#}">O(∩_∩)O哈哈哈~</a>
				</div>
				<ul class="cmtlist">
				</ul>
			</li>`;


// ����ƥ��Ľ⹹
const user = {firstName:'Anrian',lastName:'Mejia'};
function getFullName({firstName,lastName}){
    return `${firstName} ${lastName}`;
}
console.log(getFullName(user));

//���ƥ�� ���߶���Ľ
function settings(){
    return { display:{color: 'red'},keyboard:{layout: 'query'} };
}
const { display:{color:displayColor},keyboard:{layout:keyboardLayout} } = settings();
console.log(displayColor,keyboardLayout);


class Animal{
    constructor(name){

    }
}

//���ʵ��:
//    ʹ������⹹ȥ��ȡԪ�ػ򽻻�ֵ�������Ա��ⴴ����ʱ���á�
//��Ҫ�Զ������ֵʹ������⹹������Ҫ�ö���⹹��