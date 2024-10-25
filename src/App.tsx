import './App.css';

function App() {

  return (
    <>
      <h1>自我介紹</h1>

      <p>我是朱槿宸</p>
      
      <table>
        <thead>
          <tr>
            <th>暱稱</th>
            <th>年齡</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>宸宸</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>

      <p>
        <a href="https://www.im.tku.edu.tw/tw/">我就讀淡江大學資管系</a>
      </p>

      <span>這是資管系的網站:</span>
      <p>
        <a href="https://www.im.tku.edu.tw/tw/">淡江大學資訊管理學系</a>
      </p>

      <img src="https://img.soogif.com/R1sOwI1l5yZ2nCuvwPMZPGu5rFsm40uH.gif_s200x0" alt="趣味圖片" />

      <em>我的興趣:</em>
      <ul>
        <li>看書</li>
        <li>吃美食</li>
        <li>追劇</li>
        <li>看電影</li>
      </ul>

      <strong>我喜歡吃的食物:</strong>
      <ol>
        <li>蝦子</li>
        <li>炸雞</li>
        <li>巧克力</li>
        <li>提拉米蘇</li>
      </ol>

      <p>一點小哲學問題~</p>
      <form action="/submit" method="post">
        <label htmlFor="philosophy-question">為什麼有時候記憶和事實有出入?</label>
        <input type="text" id="philosophy-question" name="philosophy-question" />
        <input type="submit" value="提交" />
      </form>
    </>
  );
}

export default App;
