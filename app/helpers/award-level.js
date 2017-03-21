import Ember from 'ember';

export function awardLevelType([type , rates]/*, hash*/) {
  if(rates <2 ){
    return 'NOVICE';
  }
  else if(rates <3){
    return 'INTERMEDIATE';
  }
  else if(rates <4){
    return 'ADVANCED';
  }
  else{
    return 'MASTER';
  }
}

export default Ember.Helper.helper(awardLevelType);
