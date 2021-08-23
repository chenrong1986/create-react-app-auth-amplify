import React from 'react';
import _ from 'lodash';

class segmentFolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // segmentFolderList: [],
            // segmentFolderList: ['folder1', 'folder2', 'folder3', 'folder4'],
            segmentFolderList: [
                {segmentFolderCd: '001' ,segmentFolderNm: 'folder1'},
                {segmentFolderCd: '002' ,segmentFolderNm: 'folder2'},
                {segmentFolderCd: '003' ,segmentFolderNm: 'folder3'},
                {segmentFolderCd: '004' ,segmentFolderNm: 'folder4'}
            ],
            counts: 4
          };
          this.showFolderList = this.showFolderList.bind(this);
      }
    // const segmentFolderList = ['folder1', 'folder2', 'folder3', 'folder4'];
    // const counts = 4;
    showFolderList() {
        // this.setState({
        //     segmentFolderList: ['folder1', 'folder2', 'folder3', 'folder4'],
        //     counts: 4
        // });
        // alert(this.state.segmentFolderList[0].segmentFolderNm);
        const showSegmentFolderList = _.map(this.state.segmentFolderList, (segmentFolder) => {
            return (
                <li className="SegmentFolderListItem"  key={segmentFolder.segmentFolderCd}>
                    <span>
                        <a className="l-Main">
                            <span>
                                <svg focusable="false" role="img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="mr-1 svg-inline--fa fa-folder fa-w-16">
                                    <path fill="currentColor" d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z">
                                    </path>
                                </svg>
                                {segmentFolder.segmentFolderNm}
                            </span>
                            {/* <em>{this.state.counts}</em> */}
                        </a>
                    </span>
                </li>
            );
        });

        return (
          <ul>{ showSegmentFolderList }</ul>
        );
      }

    render() {
        return (
            <div id="showfolders">
                { this.showFolderList() }
            </div>
            // <div id="showfolders">
            //     <li class="SegmentFolderListItem"  v-for="(item, index) in showFolderList">
            //         <span>
            //             <a class="ReplyBtn" style="cursor: pointer" onClick="ReplyBtn($event,index)">
            //                 <span>
            //                     <svg focusable="false" role="img" viewBox="0 0 512 512" class="mr-1 svg-inline--fa fa-folder fa-w-16">
            //                         <path fill="currentColor" d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z">
            //                         </path>
            //                     </svg>
            //                     @{{item.segmentfolderName}}
            //                 </span>
            //                 <em style="margin-left: 4px">@{{item.counts}}</em>
            //             </a>
            //         </span>
            //     </li>
            //     <a class="block px-2 py-1 bold typo-caption" style="cursor: pointer" v-if="count > 5" v-on:click="changeFoldState">
            //         <span>
            //             <span place="count">@{{count}}</span><span place="unit">個</span>すべて表示する
            //         </span>
            //     </a>
            // </div>
        )
    }
}

export default segmentFolder;