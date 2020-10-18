import React from 'react';
import s from './Post.module.css';



const Dialogs = () => {
  
    return ( <div>
  
  <img className="img-dialogs" src="https://i.ibb.co/qkdRLJQ/55018-cifrovoe-iskusstvo-krasivaja-devushka-v-gorod-nochju-marki-raid-lechenija-cb07-komnata-doma-st.jpg" alt="" />
  
  
  
  <div className={s.dialogs}>
 
  
  
  <div className='dialogs-items'>
  
  <div className='dialog'> Elena
  </div>
   <div className='dialog'> Alex
  </div>
   <div className='dialog'> Anton
  </div>
   <div className='dialog'> Eva
  </div>
   <div className='dialog'> Maria
  </div>
   <div className='dialog'> Sergey
  </div>
  
  </div>
  
  <div className="dialog-msg">
  <div className="msg"> Hi Eva, how are you? lol
  </div>
   <div className="msg"> Hi Eva, how are you? lol
  </div>
   <div className="msg"> Hi Elena, how are you? lol
  </div>
   <div className="msg"> Hi Eva, how are you? lol
  </div>
   <div className="msg"> Hi Sergey, how are you? lol
  </div>
  
  </div>
  
  
  
  
  
    </div>
    </div>);

    }
    
export default Dialogs;