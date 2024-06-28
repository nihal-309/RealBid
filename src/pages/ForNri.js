import Faqnri from '../components/Faqnri';
import Faqquestion1nri from '../components/Faqquestion1nri';
import Faqquestion2nri from '../components/Faqquestion2nri';
import Faqquestion3nri from '../components/Faqquestion3nri';
import Nriformcontainer from '../components/Nriformcontainer';
import Secondsectionnri from '../components/Secondsectionnri';

function App() {
  return (
    <div>
      <Nriformcontainer/>
      <Secondsectionnri/>
      <Faqnri/>
      <Faqquestion1nri/>
      <Faqquestion2nri/>
      <Faqquestion3nri/>
    </div>
  );
}

export default App;