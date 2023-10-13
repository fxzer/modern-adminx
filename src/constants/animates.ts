/* export const unpairAnimates = {
  'Attention seekers': [
    'bounce',
    'flash',
    'pulse',
    'rubberBand',
    'shakeX',
    'shakeY',
    'headShake',
    'swing',
    'tada',
    'wobble',
    'jello',
    'heartBeat',
  ],
  'Specials': [
    'hinge',
    'jackInTheBox',
    'rollIn',
    'rollOut',
  ],
  'Flippers': [
    'flip',
    'flipInX',
    'flipInY',
    'flipOutX',
    'flipOutY',
  ],
  'Lightspeed': [
    'lightSpeedInRight',
    'lightSpeedInLeft',
    'lightSpeedOutRight',
    'lightSpeedOutLeft',
  ],
} */
/* 'Back': [
    'backInDown',
    'backInLeft',
    'backInRight',
    'backInUp',
  ],
  'Back exits': [
    'backOutDown',
    'backOutLeft',
    'backOutRight',
    'backOutUp',
  ],
  'Bouncing entrances': [
    'bounceIn',
    'bounceInDown',
    'bounceInLeft',
    'bounceInRight',
    'bounceInUp',
  ],
  'Bouncing exits': [
    'bounceOut',
    'bounceOutDown',
    'bounceOutLeft',
    'bounceOutRight',
    'bounceOutUp',
  ],
  'Fading entrances': [
    'fadeIn',
    'fadeInDown',
    'fadeInDownBig',
    'fadeInLeft',
    'fadeInLeftBig',
    'fadeInRight',
    'fadeInRightBig',
    'fadeInUp',
    'fadeInUpBig',
    'fadeInTopLeft',
    'fadeInTopRight',
    'fadeInBottomLeft',
    'fadeInBottomRight',
  ],
  'Fading exits': [
    'fadeOut',
    'fadeOutDown',
    'fadeOutDownBig',
    'fadeOutLeft',
    'fadeOutLeftBig',
    'fadeOutRight',
    'fadeOutRightBig',
    'fadeOutUp',
    'fadeOutUpBig',
    'fadeOutTopLeft',
    'fadeOutTopRight',
    'fadeOutBottomRight',
    'fadeOutBottomLeft',
  ],
  'Rotating entrances': [
    'rotateIn',
    'rotateInDownLeft',
    'rotateInDownRight',
    'rotateInUpLeft',
    'rotateInUpRight',
  ],
  'Rotating exits': [
    'rotateOut',
    'rotateOutDownLeft',
    'rotateOutDownRight',
    'rotateOutUpLeft',
    'rotateOutUpRight',
  ],
  'Zooming entrances': [
    'zoomIn',
    'zoomInDown',
    'zoomInLeft',
    'zoomInRight',
    'zoomInUp',
  ],
  'Zooming exits': [
    'zoomOut',
    'zoomOutDown',
    'zoomOutLeft',
    'zoomOutRight',
    'zoomOutUp',
  ],
  'Sliding entrances': [
    'slideInDown',
    'slideInLeft',
    'slideInRight',
    'slideInUp',
  ],
  'Sliding exits': [
    'slideOutDown',
    'slideOutLeft',
    'slideOutRight',
    'slideOutUp',
  ], */
export const pairAnimateGroup = {
  // 成对匹配动画
  Back: [
    ['backInUp', 'backOutUp'],
    ['backInDown', 'backOutDown'],
    ['backInLeft', 'backOutRight'],
    ['backInRight', 'backOutLeft'],
  ],
  Bouncing: [
    ['bounceIn', 'bounceOut'],
    ['bounceInDown', 'bounceOutDown'],
    ['bounceInLeft', 'bounceOutRight'],
    ['bounceInRight', 'bounceOutLeft'],
    ['bounceInUp', 'bounceOutUp'],
  ],
  Fading: [
    ['fadeInDownBig', 'fadeOutDownBig'],
    ['fadeInLeftBig', 'fadeOutRightBig'],
    ['fadeInTopLeft', 'fadeOutBottomRight'],
    ['fadeInTopRight', 'fadeOutBottomLeft'],
  ],
  Rotating: [
    ['rotateIn', 'rotateOut'],
    ['rotateInDownLeft', 'rotateOutDownLeft'],
    ['rotateInDownRight', 'rotateOutDownRight'],
    ['rotateInUpLeft', 'rotateOutUpLeft'],
    ['rotateInUpRight', 'rotateOutUpRight'],
  ],
  Zooming: [
    ['zoomIn', 'zoomOut'],
    ['zoomInDown', 'zoomOutDown'],
    ['zoomInLeft', 'zoomOutLeft'],
    ['zoomInRight', 'zoomOutRight'],
    ['zoomInUp', 'zoomOutUp'],
  ],
  Sliding: [
    ['slideInDown', 'slideOutDown'],
    ['slideInLeft', 'slideOutRight'],
    ['slideInRight', 'slideOutLeft'],
    ['slideInUp', 'slideOutUp'],
  ],

}

export function generatePairAnimates() {
  return Object.values(pairAnimateGroup).flat().map((animates) => {
    return {
      label: animates[0].replace('In', ''),
      value: animates[0].replace('In', ''),
      enterActiveClass: `animate__animated animate__${animates[0]}`,
      leaveActiveClass: `animate__animated animate__${animates[1]}`,
    }
  })
}
