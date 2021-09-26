# Editor MVP

[link to editor page!](https://seonjakim.github.io/editor/)

## 환경세팅

개발한 기능 자체는 간단하지만 Editor를 구현하기 위해서 어떤 framework를 사용해야 하는지에 대한 고민과 bundler(Rollup, Parcel, Webpack)을 직접 사용해본 후 가장 적합하다고 생각한 Webpack을 세팅할 때까지의 고민이 담겨있는 프로젝트입니다.

## 목차

[SPA](#SPA)

- [Virtual DOM](#Virtual-DOM)

[Vanilla vs 프레임워크](#Vanilla-vs-프레임워크)

- [React와 Vue 비교](#React와-Vue-비교)
  - [Performance](#>-Performance)
  - [Scalability](#>-Scalability)

[Bundler (Rollup vs Parcel vs Webpack)](#bundler-rollup-vs-parcel-vs-webpack)

- [빌드속도와 사이즈 비교](#빌드속도와-사이즈-비교)
- [Parcel과 Webpack 비교](#Parcel과-Webpack-비교)
  - [빌드 속도](#빌드-속도)
  - [Code Splitting](#Code-Splitting)
- [결론](#결론)

<br>

---

<br>

# SPA

### 장점

- component 기반으로 개발되므로 재사용성이 뛰어납니다.
- 사용자의 요구에 따라 component만 동적으로 바꾸기때문에 사용자의 요구사항에 신속하게 반응하여 에디터에 적합하다고 생각하였습니다.

### SEO 문제

- 하나의 페이지가 사용자의 요구에 따라 동적으로 변경되므로 SSR에 비해 SEO에 비교적 취약하다고 할 수 있으나 editor의 결과물 중 하나인 블로그글과는 다르게 editor 자체는 SEO보다 사용자의 요구사항에 신속하게 반응하는 것에 중점을 맞추어야 한다고 판단하였습니다

### Virtual DOM

- DOM 자체는 정적인 UI를 위해 탄생한 것으로 DOM의 변화에 따라 노드 변경과 repaint 과정을 반복하게 됩니다. 수많은 노드가 존재하는 SPA 페이지에서 사용자의 동작에 따라 repaint가 반복될 경우 비효율적이고 사용자 경험도 망치게 됩니다. 따라서 사용자의 input이 많고 input에 따라 노드의 변경이 자주 일어나며 이러한 변경이 빠르게 화면에 반영되어야 하는 에디터의 특성상 Virtual DOM을 활용하는 것이 더 적합하다고 생각합니다.

<br>

## Vanilla vs 프레임워크

아래는 실제 같은 기능을 Vanilla(왼쪽)와 React(오른쪽)으로 구현하여 코드를 비교한 이미지이며 구현을 통해 아래와 같은 결론을 도출할 수 있었습니다.

![](https://images.velog.io/images/seonja/post/28919b45-c8ee-4d37-b185-457c29a4e751/image.png)

<br>

### Vanilla

- 일정한 형식이 없어 팀원들과 형식을 정의하고 문서화하는 것에 비용 소요
- router, render, state 등과 관련된 함수들을 설정하는 boilerplate code가 필요
- innerHTML로 입력하는 코드는 string형식이므로 code snippets와 eslint가 적용되지 않아 개발자가 보기 고통스러움

### 프레임워크

- 작성자마다 코드 스타일이 다를 수는 있지만 일정한 형식이 존재하여 팀으로 개발하기에도 비교적 수월

  <br>

## 프레임워크 비교

### Angular가 적합하지 않은 이유

![](https://images.velog.io/images/seonja/post/104dd8e8-ba13-42c0-8335-2a069196f357/image.png)

SPA의 경우 한번에 브라우저로 받아지는 파일의 양이 상대적으로 많으므로 프레임워크 자체의 사이즈는 사용자의 경험에 영향을 미칠 수 있는 부분입니다. 그러므로 다른 프레임워크에 비해서 1.5배 가량 큰 사이즈는 마이너스 요인으로 작용합니다.

<br>

또한 Angular의 경우 6개월마다 Major release가 되는데, Angular 2가 발간될 때, 이전 버전과 syntax가 완전히 다른 프레임 워크로 출시되어 프로젝트의 이전이 어려웠던 일이 있어 안정적으로 고도화가 필요한 에디터에는 적합하지 않은 프레임워크라고 생각하여 제외하였습니다.

<br>

### React와 Vue 비교

#### > Performance

Vue를 반나절만에 설치부터 적용까지 공부하느라 작성한 markdown함수를 적용하지 못하고 textarea에 있는 입력값 그대로를 출력하는 형태로만 작성하였습니다. Chrome Lighthouse를 이용하여 Vue와 React의 Performance를 비교하였는데, 현재 구현한 모든 기능이 작동하는 React에 비해서 화면 자체만 그리고 있는 Vue의 Performance가 현저하게 낮게 표시되고 있었습니다.

![](https://images.velog.io/images/seonja/post/16c22752-f2c1-4c66-8c08-fca643e6c6fa/image.png)
![](https://images.velog.io/images/seonja/post/5a43eb5d-d70d-44cf-abba-01d3b88b86af/image.png)

#### > Scalability

- Vue
  - React에 비해 비교적 신생 프레임워크이므로 경력이 많지 않은 개발자들이 Vue를 활용하여 큰 규모의 프로젝트로 확장하기 어려움 (Vue로 만들어진 큰 규모의 프로젝트가 React에 비해 적어 해당 커뮤니티가 작음)
- React

  - JavaScript만으로 구성되어 개발자들이 익숙한 방식으로 코드를 작성할 수 있어 프로젝트 규모를 쉽게 확장할 수 있음
  - 컴포넌트의 재사용성 또한 확장성에 우위를 가짐

  <br>

Vue와 React 모두 비교적 가볍고 안정적인 툴이지만, React가 컴포넌트를 기반으로 개발하여 확장성에 우위를 가집니다. 퍼포먼스 또한 Vue가 React에 비해 높다고 하지만 MVP를 정의하여 개발해 본 결과 실제 퍼포먼스 측정에서 React가 더 우세했기때문에 에디터 기능에서 Vue가 React에 비해 퍼포먼스가 높다고 평가하기 어렵다고 생각되어 React가 에디터 기능에 더 적합하다고 판단됩니다.

<br>

---

<br>

# Bundler (Rollup vs Parcel vs Webpack)

> 많이 사용되는 번들러 Rollup, Parcel, Webpack을 비교해보았습니다. 물론 부족한 점이 많습니다. 정말 많고 많은 글을 읽었고, 모두 이해되지는 않았지만 최대한 스스로 사용해보고 각 차이점을 느끼기위해 노력하였습니다.

## 빌드속도와 사이즈 비교

### 빌드 속도 비교

![](https://images.velog.io/images/seonja/post/42d3f758-0b70-43ff-8ec0-f440a903fda2/image.png)![](https://images.velog.io/images/seonja/post/b8933f12-43b9-4488-bdf3-0b2d7191fadf/image.png)![](https://images.velog.io/images/seonja/post/847fe8ef-9db1-459a-8b4e-02535dc7e7c7/image.png)

<br>

### 번들된 파일 사이즈 비교

![](https://images.velog.io/images/seonja/post/be70c628-cd84-42d5-a2e6-499a54c8318d/image.png)

동일한 React 프로젝트를 Rollup, Parcel, Webpack을 이용하여 번들화했습니다. **Rollup**의 경우 빌드 속도가 가장 빠르지만 번들된 파일 결과물의 크기는 다른 번들러에 비해 **1.2배 정도 크게 산출**되었습니다. 번들된 **파일의 사이즈는 사용자 경험에 영향**을 미치는 부분 중 하나이므로 Rollup은 사이즈 부분에서 부적합하다고 판단되어 제외하고 Parcel과 Webpack을 빌드 속도, Code splitting, 산출물 기준으로 비교해보았습니다.

<br>

## Parcel과 Webpack 비교

### 빌드 속도

#### Parcel

- caching을 이용해 두 번째 빌드부터는 시간이 확연히 줄어듬

#### Webpack

- caching이 된다고는 하지만 완벽하게 구현되어 있지 않기에 빌드 시간이 최적화되어 있지 않음

### Code Splitting

#### Parcel

- 추가적인 설정 필요없이 자동으로 code splitting됨
- parcel이 알아서 code splitting을 진행하기 때문에 프로젝트 크기가 커질수록 사용자의 의지와 상관없이 번들화되므로 오히려 관리가 어려워짐

#### Webpack

- 설정이 필요함
- 프로젝트가 커질수록 설정을 통해서 정리하는 것이 파일 관리에 유리함

![](https://images.velog.io/images/seonja/post/905e173e-49c9-4241-a53d-45da64db86d4/image.png)

큰 프로젝트의 경우 직접 예시를 만들기가 어려워 예시를 찾아보았습니다. **왼쪽이 Parcel**로 번들화된 파일들이고 **오른쪽이 Webpack**으로 번들화된 파일들입니다. 개발자의 설정에 맞게 번들화된 Webpack에 비해 Parcel은 정해진 규칙없이 파일들이 흩어져 더 관리하기 어려운 상태로 번들화되어 있는 모습을 볼 수 있습니다.

### 산출물

모든 CSS, Image 파일들이 **하나의 JavaScript 번들**로 합쳐지는 **Webpack**과 달리 **Parcel**은 **CSS, JS bundle, Image 파일들이 따로 생성**되게 됩니다. 이러한 산출물의 차이점은 개발자의 성향에 따라 번들링 툴을 선택하는 기준이 될 것이라고 생각합니다.

<br>

## 결론

회사 내의 다양한 비즈니스 서비스에서 공통적으로 사용되는 툴의 경우 처음부터 안정적으로 Webpack을 사용하는 것이 더 적합해보이나 시장성을 빠르게 시험해봐야 하는 신생 비즈니스의 경우 Parcel을 프로젝트 초반에 사용하는 것이 더 적합할수도 있다고 생각합니다.
