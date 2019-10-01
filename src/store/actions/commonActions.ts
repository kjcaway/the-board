export const PUSH_MESSAGE = 'PUSH_MESSAGE';
export const HIDE_MESSAGE = 'HIDE_MESSAGE';

export function pushMessage(payload: any){
  return {
    type: PUSH_MESSAGE,
    payload
  }
}

export function hideMessage(){
  return {
    type: HIDE_MESSAGE,
  }
}