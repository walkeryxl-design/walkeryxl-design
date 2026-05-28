// --- index.html script 1 ---

    const titles = {
      'overview': ['境外旅游系统总览', '把用户端、运营后台、供应商协同、订单履约和报价方案串成一套可点击原型。'],
      'mini-home': ['境外旅游小程序', '模拟用户从首页浏览目的地和产品，点击产品可进入详情。'],
      'destinations': ['目的地首页', '按国家城市和玩法主题发现境外旅游产品。'],
      'destination-detail': ['目的地详情', '聚合目的地下的门票、玩乐、跟团和攻略。'],
      'profile': ['我的首页', '用户资料、常用游客、护照资料、我的凭证、咨询记录和客服。'],
      'product-detail': ['产品详情 / 报名', '展示境外产品详情、费用说明、确认方式和转化按钮。'],
      'checkout': ['下单支付流程', '模拟填写游客护照资料、优惠试算和微信支付。'],
      'user-orders': ['用户我的订单', '用户按状态查看自己的境外旅游订单、凭证和售后进度。'],
      'user-order-detail': ['用户订单详情', '展示订单进度、游客信息、费用信息、退改和客服入口。'],
      'travel-voucher': ['用户出行凭证', '展示二维码、文本码、PDF 确认单、使用说明和紧急联系。'],
      'order-detail': ['订单履约中心', '模拟后台确认资源、上传凭证、处理退款审核。'],
      'admin': ['平台运营后台', '运营维护商品、班期库存、游客名单、订单和退款。'],
      'supplier': ['供应商工作台', '给境外资源商处理订单确认和凭证上传的轻量后台。'],
      'product-list': ['产品列表页', '按目的地、日期、玩法、价格筛选排序后进入详情。'],
      'consultation': ['预约咨询页', '提交目的地、日期、人数、预算和需求，客服跟进报价。'],
      'traveler-docs': ['常用游客/护照资料', '维护常用游客和护照资料，下单自动带入。'],
      'consultation-record': ['咨询记录/报价单', '查看客服方案和报价，可确认报价并下单。'],
      'refund-request': ['退款申请页', '填写退款原因并查看可退金额和扣费提示。'],
      'admin-product-edit': ['后台商品编辑页', '维护境外产品基础信息、价格库存、退改和凭证说明。'],
      'admin-order-detail': ['后台订单详情页', '查看订单、游客、供应商、成本和凭证记录。'],
      'supplier-order-detail': ['供应商订单详情页', '供应商确认资源并上传凭证。'],
      'visa-materials': ['签证材料页', '上传护照、照片、在职证明等签证材料。'],
      'coupon-center': ['活动/优惠券页', '领取新人券、品类券和目的地活动券。'],
      'quote': ['报价方案', 'A/B/C/D 四档预算和首期推荐方案。']
    };

    function navigate(route) {
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      document.getElementById('view-' + route).classList.add('active');
      document.querySelectorAll('[data-route]').forEach(b => b.classList.toggle('active', b.dataset.route === route));
      document.getElementById('pageTitle').textContent = titles[route][0];
      document.getElementById('pageDesc').textContent = titles[route][1];
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function openDrawer(title, text) {
      document.getElementById('drawerTitle').textContent = title;
      document.getElementById('drawerText').textContent = text;
      document.getElementById('drawer').classList.add('open');
    }

    function closeDrawer() {
      document.getElementById('drawer').classList.remove('open');
    }

    function showToast(text) {
      const toast = document.getElementById('toast');
      toast.textContent = text;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 1800);
    }

    function payOrder() {
      navigate('user-order-detail');
      showToast('支付成功：可在我的订单查看进度');
    }

    function confirmOrder() {
      document.getElementById('orderStatus').textContent = '已确认';
      showToast('资源已确认，等待上传凭证');
    }

    function uploadVoucher() {
      document.getElementById('orderStatus').textContent = '待出行';
      showToast('凭证已上传，用户可在小程序查看');
    }


    function setExperienceMode(mode) {
      const map = { user: 'mini-home', admin: 'admin', supplier: 'supplier' };
      navigate(map[mode] || 'overview');
      showToast('已进入' + (mode === 'user' ? '用户端流程' : mode === 'admin' ? '运营端流程' : '供应商流程'));
    }

    function applyProductFilter(keyword) {
      navigate('product-list');
      showToast('筛选结果：' + keyword + '相关产品');
    }

    function fillDemoTraveler() {
      navigate('checkout');
      showToast('一键填入示例游客：ZHANG SAN / E123****678');
    }

    function resetPrototype() {
      navigate('overview');
      const status = document.getElementById('orderStatus');
      if (status) status.textContent = '待确认';
      showToast('重置体验完成');
    }

    const consumerDemoSteps = [
      {
        title: '第 1 步：浏览目的地',
        route: 'mini-home',
        desc: '你现在是消费者，从境外旅游首页开始挑选日本、东京、亲子玩法。',
        toast: '我是消费者：先浏览境外目的地'
      },
      {
        title: '第 2 步：查看产品列表',
        route: 'product-list',
        desc: '进入东京产品列表，筛选门票、一日游、亲子、中文服务等条件。',
        toast: '筛选东京亲子当地玩乐产品'
      },
      {
        title: '第 3 步：查看产品详情',
        route: 'product-detail',
        desc: '查看日期、价格、费用包含、退改规则和确认方式，决定报名。',
        toast: '查看产品详情并准备报名'
      },
      {
        title: '第 4 步：填写资料并支付',
        route: 'checkout',
        desc: '填写联系人、游客护照资料、优惠券，模拟微信支付提交订单。',
        toast: '已填写资料并提交支付'
      },
      {
        title: '第 5 步：查看我的订单',
        route: 'user-order-detail',
        desc: '支付后进入我的订单，看到订单状态为待确认，等待平台履约。',
        toast: '系统正在确认资源'
      },
      {
        title: '第 6 步：查看出行凭证',
        route: 'travel-voucher',
        desc: '供应商已上传凭证，消费者在订单内查看二维码、PDF、集合地点和紧急联系人。',
        toast: '供应商已上传凭证，消费者体验完成'
      }
    ];
    let consumerStepIndex = 0;
    let consumerDemoStarted = false;

    function renderConsumerStep() {
      const guide = document.getElementById('consumerGuide');
      const step = consumerDemoSteps[consumerStepIndex] || consumerDemoSteps[0];
      document.getElementById('consumerStepTitle').textContent = step.title;
      document.getElementById('consumerStepDesc').textContent = step.desc;
      document.getElementById('consumerProgress').style.width = ((consumerStepIndex + 1) / consumerDemoSteps.length * 100) + '%';
      document.getElementById('consumerSteps').innerHTML = consumerDemoSteps.map((item, index) => `
        <button class="${index === consumerStepIndex ? 'active' : ''}" onclick="consumerStepIndex=${index}; renderConsumerStep(); navigate('${item.route}')">
          <b>${item.title}</b><br><small>${item.desc}</small>
        </button>
      `).join('');
      guide.classList.add('show');
    }

    function nextConsumerStep() {
      if (!consumerDemoStarted) {
        startConsumerDemo();
        return;
      }
      const step = consumerDemoSteps[consumerStepIndex];
      navigate(step.route);
      renderConsumerStep();
      showToast(step.toast);
      if (step.title === '第 5 步：查看我的订单') {
        setTimeout(() => showToast('供应商已上传凭证'), 900);
      }
      if (step.title === '第 6 步：查看出行凭证') {
        setTimeout(() => showToast('消费者体验完成'), 900);
      }
      consumerStepIndex = Math.min(consumerStepIndex + 1, consumerDemoSteps.length - 1);
    }

    function startConsumerDemo() {
      consumerDemoStarted = true;
      consumerStepIndex = 0;
      nextConsumerStep();
    }

    function closeConsumerDemo() {
      consumerDemoStarted = false;
      document.getElementById('consumerGuide').classList.remove('show');
      showToast('已关闭消费者演示面板');
    }

    const guidedDemoSteps = [
      { title: '浏览产品', route: 'product-list', desc: '用户从目的地进入产品列表，筛选东京亲子产品。' },
      { title: '提交订单', route: 'checkout', desc: '用户填写游客护照资料并提交订单。' },
      { title: '后台确认', route: 'admin-order-detail', desc: '运营在后台联系供应商并确认资源。' },
      { title: '上传凭证', route: 'supplier-order-detail', desc: '供应商或运营上传二维码/PDF/文本码。' },
      { title: '查看凭证', route: 'travel-voucher', desc: '用户在小程序订单内查看出行凭证。' }
    ];
    let guidedDemoIndex = 0;
    let guidedDemoTimer = null;

    function renderDemoStep() {
      const box = document.getElementById('demoSteps');
      if (!box) return;
      box.innerHTML = guidedDemoSteps.map((step, index) => `
        <button class="ticket" onclick="guidedDemoIndex=${index}; renderDemoStep(); navigate('${step.route}')">
          <b>${index + 1}. ${step.title}</b>
          <small>${step.desc}</small>
        </button>
      `).join('');
      box.querySelectorAll('.ticket').forEach((item, index) => {
        item.style.border = index === guidedDemoIndex ? '2px solid var(--orange)' : '1px solid var(--line)';
      });
    }

    function nextDemoStep() {
      const step = guidedDemoSteps[guidedDemoIndex % guidedDemoSteps.length];
      navigate(step.route);
      renderDemoStep();
      showToast('演示步骤：' + step.title);
      guidedDemoIndex = (guidedDemoIndex + 1) % guidedDemoSteps.length;
    }

    function startGuidedDemo() {
      clearInterval(guidedDemoTimer);
      guidedDemoIndex = 0;
      nextDemoStep();
      guidedDemoTimer = setInterval(() => {
        nextDemoStep();
        if (guidedDemoIndex === 0) clearInterval(guidedDemoTimer);
      }, 1400);
    }

    renderDemoStep();

    document.querySelectorAll('[data-route]').forEach(btn => btn.addEventListener('click', () => navigate(btn.dataset.route)));
  

// --- user.html script 1 ---

function toast(text){const t=document.getElementById('toast');t.textContent=text;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}
function showPanel(id){document.querySelectorAll('[data-panel]').forEach(p=>p.style.display=p.id===id?'block':'none');document.querySelectorAll('[data-target]').forEach(b=>b.classList.toggle('active',b.dataset.target===id));}


// --- admin.html script 1 ---

function toast(text){const t=document.getElementById('toast');t.textContent=text;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}
function showPanel(id){document.querySelectorAll('[data-panel]').forEach(p=>p.style.display=p.id===id?'block':'none');document.querySelectorAll('[data-target]').forEach(b=>b.classList.toggle('active',b.dataset.target===id));}


// --- supplier.html script 1 ---

function toast(text){const t=document.getElementById('toast');t.textContent=text;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}
function showPanel(id){document.querySelectorAll('[data-panel]').forEach(p=>p.style.display=p.id===id?'block':'none');document.querySelectorAll('[data-target]').forEach(b=>b.classList.toggle('active',b.dataset.target===id));}


// --- quote.html script 1 ---

function toast(text){const t=document.getElementById('toast');t.textContent=text;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}
function showPanel(id){document.querySelectorAll('[data-panel]').forEach(p=>p.style.display=p.id===id?'block':'none');document.querySelectorAll('[data-target]').forEach(b=>b.classList.toggle('active',b.dataset.target===id));}

