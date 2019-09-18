//Dont change it
requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $) {
        function halloweenMonstersCanvas(dom, data) {

            if (! data || ! data.ext) {
                return
            }

            const result = data.ext.result
            const output = data.out
            const input = data.in
            const explanation = data.ext.explanation

            /*----------------------------------------------*
             *
             * attr
             *
             *----------------------------------------------*/
            const attr = {
                edge: {
                    'stroke-width': 0.5,
                    'stroke': '#8fc7ed',
                },
                eagle: {
                    'fill': '#163e69',
                    'stroke-width': 0.0,
                },
                hexagon: {
                    obstacle: {
                        'fill': '#8fc7ed',
                        'stroke': '#4094c7',
                    },
                    landing: {
                        'fill': '#ffc965',
                        'stroke': '#FFAE19',
                    },
                },
            }

            const eagle = "M 34.5,30 c -0.9,-0.4 -1.7,-1.1 -1.7,-1.7 c 0,-0.1 0.7,-0.1 1.5,-0.1 c 0.8,0 1.5,-0.1 1.5,-0.2 c 0,-0.2 -0.7,-1.5 -1.5,-3 l -1.3,-2.7 l -1.9,-0.6 c -1,-0.4 -2.4,-0.9 -3.2,-1.2 c -1,-0.4 -2.3,-0.6 -4.8,-0.7 c -2.5,-0.1 -3.7,-0.3 -4.5,-0.7 c -0.6,-0.3 -1.4,-0.5 -1.8,-0.4 c -0.6,0 -0.8,0.3 -1,1.1 c -0.2,0.7 -0.5,1.1 -0.8,1.2 c -0.3,0 -0.7,0.2 -0.8,0.3 c -0.2,0.1 -2.2,0.2 -4.5,0.2 h -4.2 l 0.2,1.3 c 0.1,0.7 0.3,1.6 0.3,2.1 l 0.2,0.9 h -2.6 l -2.7,0.1 l -0.1,1 l -0.1,1 h 1.9 c 1.9,0 2.2,0.2 1.4,0.8 c -2.2,2 -5.7,2 -7.6,0 l -0.8,-0.8 h 1.8 h 1.8 l -0.1,-1 l -0.1,-1 l -2.3,-0.1 c -1.6,0 -2.4,-0.2 -2.5,-0.4 c -0.1,-0.2 0,-1.1 0.3,-2.1 l 0.3,-1.7 l -3.7,-0.1 l -3.7,-0.1 l -0.2,-0.8 c -0.1,-0.5 -0.6,-1.2 -1.1,-1.5 c -0.6,-0.6 -1,-0.7 -2.2,-0.7 c -0.8,0 -1.8,0.1 -2.2,0.3 c -0.5,0.3 -2,0.5 -4.4,0.5 c -3.4,0.2 -4,0.3 -6.8,1.2 c -1.9,0.6 -3.3,1.2 -3.3,1.4 c -0.1,0.2 -0.3,0.5 -0.3,0.5 c -0.3,0.2 -2.4,4.8 -2.4,5.1 c 0,0.1 0.6,0.2 1.4,0.2 c 0.8,0 1.5,0.1 1.5,0.2 c 0,1.1 -3.2,2.4 -5,2.1 c -1.1,-0.2 -3.5,-1.6 -3.5,-2 c 0,-0.1 0.9,-0.3 1.9,-0.3 l 2,-0.1 l 1.2,-3 c 3.1,-7.2 6.9,-15.1 8.7,-18 c 0.5,-0.7 0.5,-1 0.3,-1.4 c -0.2,-0.2 -0.2,-0.6 -0.2,-0.8 c 0.2,-0.5 1.9,-1.1 4.2,-1.7 c 1.1,-0.2 2,-0.6 2.1,-0.7 c 0.2,-0.1 0.7,-0.2 1.1,-0.2 c 0.8,0 0.9,-0.1 1.4,-1.5 c 0.7,-1.8 1.4,-4.7 1.4,-5.4 c 0,-0.3 0.2,-0.9 0.4,-1.4 c 1.1,-2 1,-3.9 -0.2,-3.8 c -0.5,0.1 -0.6,-0.1 -0.6,-0.7 c 0,-0.7 0.1,-0.8 0.6,-0.8 c 0.8,0 1.1,-0.7 1.1,-1.8 c -0.1,-0.8 0,-0.9 0.5,-0.9 c 0.6,0 0.7,0.1 0.6,0.9 c -0.1,0.6 0,0.9 0.2,0.7 c 0.2,-0.1 0.3,-0.7 0.3,-1.5 c 0,-1.7 1.4,-6.4 2.1,-6.9 c 0.5,-0.3 0.5,-0.3 -0.1,-0.7 c -0.8,-0.5 -3,-1.6 -3.2,-1.6 c -0.1,0 -0.1,0.2 0.1,0.4 c 0.3,0.3 0.3,0.5 0,0.8 c -0.2,0.2 -0.1,0.5 0.4,0.9 c 0.4,0.4 0.7,0.8 0.7,0.9 c 0,0.4 -2.2,2.6 -2.6,2.6 c -0.1,0 -0.6,-0.5 -1.1,-1 c -0.9,-0.8 -0.9,-0.9 -0.5,-1.4 c 0.7,-0.8 0.3,-1.1 -1.3,-0.9 c -1.3,0.2 -1.5,0.1 -2.4,-0.8 c -0.7,-0.7 -0.9,-1.1 -0.9,-1.9 c 0,-3.5 4.4,-4.6 5.6,-1.3 c 0.4,1 0.6,1.1 1.5,0.5 c 0.4,-0.2 0.6,-0.3 0.7,-0.1 c 0.1,0.1 1.7,0.2 4,0.2 c 3.8,0 3.9,0 3.6,-0.5 c -0.5,-0.8 -0.2,-0.9 0.7,-0.4 c 0.6,0.4 0.8,0.4 1,0 c 0.5,-0.6 0.7,-0.5 0.5,0.3 c -0.1,0.7 -0.1,0.7 0.9,0.6 c 0.5,-0.1 1.2,-0.2 1.5,-0.2 c 0.4,0 0.4,-0.1 0.1,-0.6 c -0.5,-0.7 -0.3,-1.1 0.4,-1.4 c 0.5,-0.1 0.5,-0.2 0.1,-0.6 c -0.2,-0.3 -0.4,-1 -0.4,-1.6 c 0,-1.6 1.1,-2.7 2.7,-2.9 c 1.2,-0.1 1.3,-0.1 2.2,0.8 c 0.7,0.8 0.9,1.1 0.9,2 c 0,0.5 -0.2,1.2 -0.4,1.5 c -0.5,0.7 -0.5,0.9 0.2,1 c 0.7,0.1 1,1 0.4,1.4 c -0.4,0.3 -0.2,0.3 0.9,0.5 c 0.8,0.1 1.9,0.1 2.4,0.1 c 0.5,0 1.2,0.2 1.5,0.4 c 0.4,0.3 0.8,0.4 1.3,0.3 c 1.1,-0.3 1.2,-0.4 0.8,-0.7 c -0.4,-0.3 -0.4,-0.4 0,-0.9 c 0.3,-0.4 0.4,-0.4 1,0 c 0.8,0.5 0.9,0.3 0.9,-0.8 c 0,-1 0.5,-1.2 0.6,-0.3 c 0.1,0.3 0.3,0.6 0.6,0.7 c 0.7,0.1 1,0.5 0.8,1.3 c -0.1,0.4 0,0.6 0.4,0.8 c 0.3,0.2 0.5,0.4 0.4,0.6 c -0.1,0.1 -0.4,0 -0.8,-0.2 c -0.8,-0.5 -1.2,-0.3 -1.2,0.7 c 0,0.4 -0.1,0.8 -0.2,0.8 c -0.2,0 -0.3,-0.2 -0.3,-0.5 c 0,-0.3 -0.1,-0.3 -0.3,-0.1 c -0.3,0.2 -0.2,0.4 0.1,0.8 c 0.7,0.8 2.3,6.4 2.2,7.9 c -0.1,0.6 0,1.2 0.1,1.3 c 0.2,0.1 0.3,-0.3 0.3,-0.8 c 0,-0.9 0.1,-1 0.7,-0.9 c 0.7,0.1 0.7,0.2 0.7,1 c -0.1,1.2 0.2,1.5 1.7,1.7 c 1.1,0.2 1.5,0.4 3.3,2.2 l 2.1,2.1 v 2.6 c 0,2.9 0.1,2.7 -2.9,5.1 c -1.1,0.9 -1.4,1.6 -0.8,1.8 c 0.2,0 1.5,0.3 2.9,0.7 c 2,0.5 4.7,1.5 5.2,2 c 0,0 0,0.4 -0.2,0.7 c -0.3,0.6 -0.3,0.8 0.6,2.2 c 1.1,1.7 6.8,13.9 6.8,14.5 c 0,0.2 0.5,1.5 1.2,2.8 c 0.6,1.4 1.2,2.7 1.2,2.9 c 0,0.2 0.7,0.3 2.09,0.3 c 1.1,0 2.07,0.1 2.07,0.2 c 0,0.3 -1.07,1.2 -1.97,1.7 c -1.19,0.6 -3.69,0.5 -5.09,-0.1 z m -2.2,-9.1 c 0,-0.1 -0.3,-0.7 -3.6,-7.9 c -1,-2.1 -1.8,-4.2 -2,-4.6 c -0.1,-0.5 -0.3,-0.9 -0.4,-0.9 c -0.1,0.1 -0.8,1 -1.5,2.1 l -1.2,2 v 2.5 v 2.6 l 1,1.1 c 0.8,0.9 1.2,1.2 3.2,1.8 c 1.3,0.3 2.7,0.8 3.2,1 c 0.9,0.4 1.3,0.5 1.3,0.3 z m -60.5,-1.8 c 2.7,-0.7 3.9,-1.3 3.9,-1.9 c 0,-0.1 0.6,-0.6 1.5,-1.1 c 0.8,-0.4 1.5,-0.9 1.7,-1.1 c 0.2,-0.2 -0.4,-1.3 -1.8,-3.7 c -1.1,-1.8 -2.3,-3.7 -2.5,-4 l -0.5,-0.6 l -0.3,0.7 c -0.1,0.4 -0.2,0.8 -0.2,1.1 c 0,0.1 -0.9,2.1 -2,4.4 c -1.1,2.2 -2,4.3 -2,4.5 c 0,0.2 -0.1,0.4 -0.2,0.5 c -0.1,0.1 -0.5,0.6 -0.8,1.2 l -0.6,1.2 l 0.6,-0.2 c 0.3,-0.1 1.7,-0.5 3.2,-1 z m 52,-0.4 c 0,-0.3 -1.1,-1 -1.9,-1.2 c -0.5,-0.2 -0.9,-0.1 -1.3,0.2 c -0.7,0.7 -0.6,0.9 0.8,1 c 0.7,0.1 1.5,0.1 1.9,0.2 c 0.3,0 0.5,-0.1 0.5,-0.2 z m -44.1,-0.8 c 0.1,-0.1 -0.1,-0.5 -0.4,-0.8 l -0.6,-0.6 l -1.1,0.8 c -0.6,0.4 -1.1,0.8 -1.1,0.8 c 0,0.2 3,0 3.2,-0.2 z m 1.4,-9.2 c 0,-3.4 -0.1,-6.2 -0.2,-6.2 c -0.1,0 -0.6,0.2 -1.1,0.4 c -0.4,0.3 -1.7,0.7 -2.9,1 c -1.3,0.4 -2.2,0.8 -2.2,1 c 0,0.2 0.7,1.6 1.7,3.2 c 1,1.5 2.4,3.7 3.1,4.9 c 0.7,1.2 1.4,2.1 1.4,2 c 0.1,0 0.2,-2.9 0.2,-6.3 z m 39.6,2.4 c 0,-0.9 0.1,-1.6 0.4,-1.8 c 0.4,-0.5 1.7,-0.6 2.1,-0.2 c 0.2,0.2 0.6,-0.2 1.4,-1.3 c 0.6,-0.8 1.1,-1.7 1.1,-1.9 c 0.1,-0.7 0,-1 -0.5,-1 c -0.4,0 -4,-1.2 -5.1,-1.7 c -0.5,-0.2 -0.5,0.1 -0.5,4.6 c 0,4.6 0,4.8 0.5,4.8 c 0.5,0 0.6,-0.2 0.6,-1.5 z m -29.7,-34.5 c 0.1,-0.2 -0.4,-0.3 -1.4,-0.3 c -0.8,0 -1.5,0.1 -1.5,0.1 c 0,0.1 0.4,0.4 0.9,0.7 c 0.7,0.4 0.9,0.5 1.3,0.2 c 0.3,-0.2 0.6,-0.5 0.7,-0.7 z"

            /*----------------------------------------------*
             *
             * paper
             *
             *----------------------------------------------*/
            const [ROW, COL] = [9, 12]
            const R = 19
            const H = Math.sqrt(Math.pow(R, 2)-Math.pow(R/2, 2))
            const os = 10

            const paper_w = R*1.5*COL+R/2+os*2
            const paper_h = H*2*ROW+H+os*2
            const paper = Raphael(dom, paper_w, paper_h, 0, 0);

            /*----------------------------------------------*
             *
             * draw
             *
             *----------------------------------------------*/
            let hexagon_dict = {}
            let coord_dict = {}

            draw_hex_grid(ROW, COL)

            for (hex of input) {
                hexagon_dict[hex].attr(attr.hexagon.obstacle)
            }

            if (result) {
                for (hex of explanation) {
                    hexagon_dict[hex].attr(attr.hexagon.landing)
                }
            }

            for (hex of output) {
                draw_eagle(hex)
            }

            /*----------------------------------------------*
             *
             * draw eagle
             *
             *----------------------------------------------*/
            function draw_eagle(fig) {
                if (fig.match(/^[A-Z][1-9]$/)) {
                    const e = paper.path(eagle).attr(attr.eagle)
                    e.transform(['t', ...coord_dict[fig]]).scale(0.32)
                    paper.text(...coord_dict[fig], fig).attr({'font-size': '9px', 'fill': 'white'})
                }
            }

            /*----------------------------------------------*
             *
             * draw hex grid
             *
             *----------------------------------------------*/
            function draw_hex_grid(row, col, borders) {
                for (let r = 0; r < row; r += 1) {
                    for (let c = 0; c < col; c += 1) {
                        const [cx, cy]
                            = [c*R*1.5+R+os, r*H*2+(H*(c%2))+H+os]
                        const fig = String.fromCodePoint(c+65)+(r+1)
                        hexagon_dict[fig] = draw_hex(cx, cy)
                        coord_dict[fig] = [cx, cy]
                        paper.text(cx, cy, fig).attr({'font-size': '9px'})
                    }
                }
            }

            /*----------------------------------------------*
             *
             * draw hex
             *
             *----------------------------------------------*/
            function draw_hex(cx, cy) {
                let deg = -120
                let hexagon_path = ['M']
                for (let i = 0; i < 6; i += 1) {
                    const x1 = Math.cos(Math.PI*2*((deg+i*60)/360))*R
                    const y1 = Math.sin(Math.PI*2*((deg+i*60)/360))*R
                    const x2 = Math.cos(Math.PI*2*((deg+(i+1)*60)/360))*R
                    const y2 = Math.sin(Math.PI*2*((deg+(i+1)*60)/360))*R
                    if (i == 0) {
                        hexagon_path = hexagon_path.concat([x1+cx, y1+cy])
                    }
                    hexagon_path = hexagon_path.concat(['L', x2+cx, y2+cy])
                }
                return paper.path(hexagon_path.concat(['z'])).attr(attr.edge)
            }

        }

        var $tryit;
        var io = new extIO({
            multipleArguments: false,
            functions: {
                python: 'halloween_monsters',
                js: 'halloweenMonsters'
            },
            /*
            animation: function($expl, data){
                halloweenMonstersCanvas(
                    $expl[0],
                    data,
                );
            }
            */
        });
        io.start();
    }
);
