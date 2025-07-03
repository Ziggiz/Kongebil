(function () {
    var a = {};
    function trans(c, d) {
        var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        a[e[0x0]] = e;
        return '';
    }
    function regTextVar(c, d) {
        var e = ![];
        d = d['toLowerCase']();
        var f = function () {
            var o = this['get']('data');
            o['updateText'](o['translateObjs'][c]);
        };
        var g = function (o) {
            var p = o['data']['nextSelectedIndex'];
            if (p >= 0x0) {
                var q = o['source']['get']('items')[p];
                var r = function () {
                    q['unbind']('begin', r, this);
                    f['call'](this);
                };
                q['bind']('begin', r, this);
            } else
                f['call'](this);
        };
        var h = function (o) {
            return function (p) {
                if (o in p) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var i = function (o, p) {
            return function (q, r) {
                if (o == q && p in r) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var j = function (o, p, q) {
            for (var r = 0x0; r < o['length']; ++r) {
                var s = o[r];
                var t = s['get']('selectedIndex');
                if (t >= 0x0) {
                    var u = p['split']('.');
                    var v = s['get']('items')[t];
                    if (q !== undefined && !q['call'](this, v))
                        continue;
                    for (var w = 0x0; w < u['length']; ++w) {
                        if (v == undefined)
                            return '';
                        v = 'get' in v ? v['get'](u[w]) : v[u[w]];
                    }
                    return v;
                }
            }
            return '';
        };
        var k = function (o) {
            var p = o['get']('player');
            return p !== undefined && p['get']('viewerArea') == this['getMainViewer']();
        };
        switch (d) {
        case 'title':
        case 'subtitle':
            var m = function () {
                switch (d) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (m) {
                return function () {
                    var o = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!e) {
                        for (var p = 0x0; p < o['length']; ++p) {
                            o[p]['bind']('changing', g, this);
                        }
                        e = !![];
                    }
                    return j['call'](this, o, m, k);
                };
            }
            break;
        default:
            if (d['startsWith']('quiz.') && 'Quiz' in TDV) {
                var n = undefined;
                var m = function () {
                    switch (d) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var o = /quiz\.([\w_]+)\.(.+)/['exec'](d);
                        if (o !== undefined) {
                            n = o[0x1];
                            switch ('quiz.' + o[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (m) {
                    return function () {
                        var o = this['get']('data')['quiz'];
                        if (o) {
                            if (!e) {
                                if (n != undefined)
                                    if (n == 'global') {
                                        var q = this['get']('data')['quizConfig'];
                                        var s = q['objectives'];
                                        for (var u = 0x0, w = s['length']; u < w; ++u) {
                                            o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, s[u]['id'], m), this);
                                        }
                                    } else {
                                        o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, n, m), this);
                                    }
                                else
                                    o['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], h['call'](this, m), this);
                                e = !![];
                            }
                            try {
                                var x = 0x0;
                                if (n != undefined) {
                                    if (n == 'global') {
                                        var q = this['get']('data')['quizConfig'];
                                        var s = q['objectives'];
                                        for (var u = 0x0, w = s['length']; u < w; ++u) {
                                            x += o['getObjective'](s[u]['id'], m);
                                        }
                                    } else {
                                        x = o['getObjective'](n, m);
                                    }
                                } else {
                                    x = o['get'](m);
                                    if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        x += 0x1;
                                }
                                return x;
                            } catch (y) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, c) {
        var d = {};
        d['player'] = player;
        d['playList'] = c;
        function e(h) {
            for (var j = 0x0; j < h['length']; ++j) {
                var k = h[j];
                if ('id' in k)
                    player[k['id']] = k;
            }
        }
        if (d['questions']) {
            e(d['questions']);
            for (var f = 0x0; f < d['questions']['length']; ++f) {
                var g = d['questions'][f];
                e(g['options']);
            }
        }
        if (d['objectives']) {
            e(d['objectives']);
        }
        if (d['califications']) {
            e(d['califications']);
        }
        if (d['score']) {
            player[d['score']['id']] = d['score'];
        }
        if (d['question']) {
            player[d['question']['id']] = d['question'];
        }
        if (d['timeout']) {
            player[d['timeout']['id']] = d['timeout'];
        }
        player['get']('data')['translateObjs'] = a;
        return d;
    }
    var b = {"contentOpaque":false,"downloadEnabled":true,"backgroundColorDirection":"vertical","backgroundColorRatios":[0],"paddingBottom":0,"id":"rootPlayer","gap":10,"paddingLeft":0,"vrPolyfillScale":0.75,"toolTipHorizontalAlign":"center","children":["this.MainViewer"],"scripts":{"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"textToSpeech":TDV.Tour.Script.textToSpeech,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getMediaByName":TDV.Tour.Script.getMediaByName,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"registerKey":TDV.Tour.Script.registerKey,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"historyGoBack":TDV.Tour.Script.historyGoBack,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPixels":TDV.Tour.Script.getPixels,"mixObject":TDV.Tour.Script.mixObject,"getOverlays":TDV.Tour.Script.getOverlays,"init":TDV.Tour.Script.init,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setValue":TDV.Tour.Script.setValue,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getMainViewer":TDV.Tour.Script.getMainViewer,"existsKey":TDV.Tour.Script.existsKey,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizFinish":TDV.Tour.Script.quizFinish,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizStart":TDV.Tour.Script.quizStart,"getKey":TDV.Tour.Script.getKey,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"quizShowScore":TDV.Tour.Script.quizShowScore,"cloneCamera":TDV.Tour.Script.cloneCamera,"initGA":TDV.Tour.Script.initGA,"setLocale":TDV.Tour.Script.setLocale,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"initQuiz":TDV.Tour.Script.initQuiz,"openLink":TDV.Tour.Script.openLink,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"shareSocial":TDV.Tour.Script.shareSocial,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"playAudioList":TDV.Tour.Script.playAudioList,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"historyGoForward":TDV.Tour.Script.historyGoForward,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"unregisterKey":TDV.Tour.Script.unregisterKey,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"resumePlayers":TDV.Tour.Script.resumePlayers,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getComponentByName":TDV.Tour.Script.getComponentByName,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"translate":TDV.Tour.Script.translate,"showWindow":TDV.Tour.Script.showWindow,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setMapLocation":TDV.Tour.Script.setMapLocation,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"isPanorama":TDV.Tour.Script.isPanorama,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled},"scrollBarColor":"#000000","paddingRight":0,"scrollBarOpacity":0.5,"desktopMipmappingEnabled":false,"verticalAlign":"top","overflow":"hidden","borderSize":0,"horizontalAlign":"left","definitions": [{"class":"PlayList","id":"mainPlayList","items":[{"media":"this.panorama_40C5ADCB_4AE6_34AA_41BB_AF5D574E04BF","class":"PanoramaPlayListItem","camera":"this.panorama_40C5ADCB_4AE6_34AA_41BB_AF5D574E04BF_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer"},{"media":"this.panorama_4348F654_4AE2_17BE_41A8_D10CDDF8BCB9","class":"PanoramaPlayListItem","camera":"this.panorama_4348F654_4AE2_17BE_41A8_D10CDDF8BCB9_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","player":"this.MainViewerPanoramaPlayer"},{"media":"this.panorama_43A4DE6D_4AE2_146E_41C5_27331148A903","class":"PanoramaPlayListItem","camera":"this.panorama_43A4DE6D_4AE2_146E_41C5_27331148A903_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}]},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":-77.63,"pitch":-22.6},"class":"PanoramaCamera","automaticZoomSpeed":10,"initialSequence":{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"pitchSpeed":5.28,"class":"TargetPanoramaCameraMovement","targetPitch":-18.78,"path":"shortest","yawSpeed":9.6,"easing":"cubic_in_out","targetYaw":-41.58},{"pitchSpeed":6.35,"class":"TargetPanoramaCameraMovement","targetPitch":8.35,"path":"shortest","yawSpeed":11.75,"easing":"cubic_in_out","targetYaw":-78.51},{"pitchSpeed":3.14,"class":"TargetPanoramaCameraMovement","targetPitch":-12.25,"path":"shortest","yawSpeed":5.3,"easing":"cubic_in_out","targetYaw":-107.65},{"pitchSpeed":6.35,"class":"TargetPanoramaCameraMovement","targetPitch":-12.25,"path":"shortest","yawSpeed":11.75,"easing":"cubic_in_out","targetYaw":-78.51}]},"id":"panorama_40C5ADCB_4AE6_34AA_41BB_AF5D574E04BF_camera"},{"label":trans('panorama_40C5ADCB_4AE6_34AA_41BB_AF5D574E04BF.label'),"id":"panorama_40C5ADCB_4AE6_34AA_41BB_AF5D574E04BF","adjacentPanoramas":[{"class":"AdjacentPanorama","distance":100,"backwardYaw":-29.04,"yaw":-77.76,"select":"this.overlay_468FAFE5_4AE2_349E_41CC_6F5A49586E4D.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_4348F654_4AE2_17BE_41A8_D10CDDF8BCB9"},{"class":"AdjacentPanorama","distance":100,"backwardYaw":-29.04,"yaw":-77.76,"select":"this.overlay_468FAFE5_4AE2_349E_41CC_6F5A49586E4D.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_4348F654_4AE2_17BE_41A8_D10CDDF8BCB9"},{"class":"AdjacentPanorama","distance":81.61,"backwardYaw":-29.04,"yaw":-77.76,"select":"this.overlay_580B010E_4B1E_0DAA_41A5_C798DFAE9BFD.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_4348F654_4AE2_17BE_41A8_D10CDDF8BCB9"}],"class":"Panorama","partial":false,"pitch":0,"hfov":360,"frames":[{"cube":{"levels":[{"url":"media/panorama_40C5ADCB_4AE6_34AA_41BB_AF5D574E04BF_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","width":15360,"colCount":30,"rowCount":5,"height":2560},{"url":"media/panorama_40C5ADCB_4AE6_34AA_41BB_AF5D574E04BF_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","width":9216,"colCount":18,"rowCount":3,"height":1536},{"url":"media/panorama_40C5ADCB_4AE6_34AA_41BB_AF5D574E04BF_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","width":6144,"colCount":12,"rowCount":2,"height":1024},{"url":"media/panorama_40C5ADCB_4AE6_34AA_41BB_AF5D574E04BF_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","width":3072,"colCount":6,"rowCount":1,"height":512},{"url":"media/panorama_40C5ADCB_4AE6_34AA_41BB_AF5D574E04BF_0/{face}/vr/0.jpg","tags":"mobilevr","class":"TiledImageResourceLevel","width":9216,"colCount":6,"rowCount":1,"height":1536}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_40C5ADCB_4AE6_34AA_41BB_AF5D574E04BF_t.jpg","class":"CubicPanoramaFrame"}],"thumbnailUrl":"media/panorama_40C5ADCB_4AE6_34AA_41BB_AF5D574E04BF_t.jpg","hfovMax":130,"overlays":["this.overlay_468FAFE5_4AE2_349E_41CC_6F5A49586E4D","this.overlay_580B010E_4B1E_0DAA_41A5_C798DFAE9BFD"],"hfovMin":"120%","vfov":180,"data":{"label":"R0020902-HDR-denoise-denoise"}},{"label":trans('panorama_4348F654_4AE2_17BE_41A8_D10CDDF8BCB9.label'),"id":"panorama_4348F654_4AE2_17BE_41A8_D10CDDF8BCB9","adjacentPanoramas":[{"class":"AdjacentPanorama","distance":10.94,"backwardYaw":-77.76,"yaw":-29.04,"select":"this.overlay_47BBE5ED_4AE2_746E_41B9_825903855082.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_40C5ADCB_4AE6_34AA_41BB_AF5D574E04BF"},{"class":"AdjacentPanorama","distance":3.48,"backwardYaw":7.98,"yaw":37.06,"select":"this.overlay_4764BACD_4AEE_FCAE_41C2_97828D73A171.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_43A4DE6D_4AE2_146E_41C5_27331148A903"}],"class":"Panorama","partial":false,"pitch":0,"hfov":360,"frames":[{"cube":{"levels":[{"url":"media/panorama_4348F654_4AE2_17BE_41A8_D10CDDF8BCB9_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","width":15360,"colCount":30,"rowCount":5,"height":2560},{"url":"media/panorama_4348F654_4AE2_17BE_41A8_D10CDDF8BCB9_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","width":9216,"colCount":18,"rowCount":3,"height":1536},{"url":"media/panorama_4348F654_4AE2_17BE_41A8_D10CDDF8BCB9_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","width":6144,"colCount":12,"rowCount":2,"height":1024},{"url":"media/panorama_4348F654_4AE2_17BE_41A8_D10CDDF8BCB9_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","width":3072,"colCount":6,"rowCount":1,"height":512},{"url":"media/panorama_4348F654_4AE2_17BE_41A8_D10CDDF8BCB9_0/{face}/vr/0.jpg","tags":"mobilevr","class":"TiledImageResourceLevel","width":9216,"colCount":6,"rowCount":1,"height":1536}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_4348F654_4AE2_17BE_41A8_D10CDDF8BCB9_t.jpg","class":"CubicPanoramaFrame"}],"thumbnailUrl":"media/panorama_4348F654_4AE2_17BE_41A8_D10CDDF8BCB9_t.jpg","hfovMax":130,"overlays":["this.overlay_47BBE5ED_4AE2_746E_41B9_825903855082","this.overlay_4764BACD_4AEE_FCAE_41C2_97828D73A171"],"hfovMin":"120%","vfov":180,"data":{"label":"Kongesetet"}},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":-174.6,"pitch":-8.21},"class":"PanoramaCamera","automaticZoomSpeed":10,"initialSequence":{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"pitchSpeed":6.35,"class":"TargetPanoramaCameraMovement","targetPitch":-40.89,"path":"shortest","yawSpeed":11.75,"easing":"cubic_in_out","targetYaw":170.45},{"pitchSpeed":17.05,"class":"TargetPanoramaCameraMovement","targetPitch":-36.62,"path":"shortest","yawSpeed":33.25,"easing":"cubic_in_out","targetYaw":-167.44},{"pitchSpeed":3.14,"class":"TargetPanoramaCameraMovement","targetPitch":-14.76,"path":"shortest","yawSpeed":5.3,"easing":"cubic_in_out","targetYaw":7.41}]},"id":"panorama_43A4DE6D_4AE2_146E_41C5_27331148A903_camera"},{"subtitlesFontColor":"#FFFFFF","id":"MainViewer","playbackBarProgressBackgroundColorDirection":"vertical","toolTipFontColor":"#606060","firstTransitionDuration":0,"vrPointerSelectionColor":"#FF6600","subtitlesPaddingLeft":5,"progressBarBackgroundColor":["#3399FF"],"surfaceReticleSelectionOpacity":1,"subtitlesTextShadowColor":"#000000","subtitlesPaddingRight":5,"toolTipShadowColor":"#333333","playbackBarHeight":10,"playbackBarHeadBorderRadius":0,"playbackBarBackgroundColor":["#FFFFFF"],"surfaceReticleSelectionColor":"#FFFFFF","subtitlesFontSize":"3vmin","playbackBarProgressOpacity":1,"subtitlesPaddingBottom":5,"toolTipFontFamily":"Arial","subtitlesBottom":50,"toolTipShadowVerticalLength":0,"progressBorderRadius":0,"borderSize":0,"playbackBarHeadBorderColor":"#000000","playbackBarHeadBackgroundColorDirection":"vertical","progressRight":0,"width":"100%","progressBackgroundColor":["#FFFFFF"],"playbackBarBorderSize":0,"vrPointerColor":"#FFFFFF","toolTipFontSize":"1.11vmin","progressBarBorderRadius":0,"subtitlesBackgroundOpacity":0.2,"displayTooltipInSurfaceSelection":true,"subtitlesBorderColor":"#FFFFFF","toolTipPaddingLeft":6,"height":"100%","progressBorderSize":0,"class":"ViewerArea","playbackBarHeadWidth":6,"progressBackgroundOpacity":1,"subtitlesTextDecoration":"none","playbackBarProgressBorderSize":0,"shadow":false,"progressBarOpacity":1,"subtitlesTextShadowBlurRadius":0,"subtitlesTextShadowVerticalLength":1,"progressOpacity":1,"progressBarBackgroundColorDirection":"vertical","displayTooltipInTouchScreens":true,"subtitlesFontFamily":"Arial","toolTipOpacity":1,"borderRadius":0,"playbackBarRight":0,"propagateClick":false,"playbackBarBackgroundColorDirection":"vertical","toolTipPaddingBottom":4,"playbackBarProgressBorderRadius":0,"toolTipBorderRadius":3,"paddingTop":0,"playbackBarHeadShadowBlurRadius":3,"paddingBottom":0,"playbackBarLeft":0,"subtitlesShadow":false,"playbackBarProgressBackgroundColor":["#3399FF"],"doubleClickAction":"toggle_fullscreen","transitionMode":"blending","playbackBarHeadShadowVerticalLength":0,"progressBarBorderColor":"#000000","playbackBarHeadHeight":15,"subtitlesOpacity":1,"subtitlesPaddingTop":5,"playbackBarHeadShadowColor":"#000000","toolTipFontWeight":"normal","progressBarBackgroundColorRatios":[0],"toolTipShadowBlurRadius":3,"paddingLeft":0,"progressBarBorderSize":0,"toolTipHorizontalAlign":"center","playbackBarBackgroundOpacity":1,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBorderSize":0,"paddingRight":0,"playbackBarHeadShadow":true,"progressBackgroundColorRatios":[0],"progressBackgroundColorDirection":"vertical","subtitlesGap":0,"toolTipShadowOpacity":1,"subtitlesHorizontalAlign":"center","playbackBarHeadOpacity":1,"playbackBarProgressBackgroundColorRatios":[0],"surfaceReticleColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"toolTipTextShadowColor":"#000000","subtitlesBackgroundColor":"#000000","progressBottom":0,"progressHeight":10,"toolTipDisplayTime":600,"subtitlesVerticalAlign":"bottom","surfaceReticleOpacity":0.6,"minHeight":50,"minWidth":100,"toolTipBorderSize":1,"progressBorderColor":"#000000","vrPointerSelectionTime":2000,"subtitlesTextShadowOpacity":1,"playbackBarBorderRadius":0,"progressLeft":0,"subtitlesBorderSize":0,"toolTipBorderColor":"#767676","playbackBarHeadShadowHorizontalLength":0,"toolTipPaddingTop":4,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBorderColor":"#FFFFFF","toolTipFontStyle":"normal","toolTipPaddingRight":6,"transitionDuration":500,"playbackBarOpacity":1,"playbackBarProgressBorderColor":"#000000","playbackBarBottom":5,"toolTipTextShadowBlurRadius":3,"toolTipShadowHorizontalLength":0,"subtitlesTop":0,"subtitlesFontWeight":"normal","data":{"name":"Main Viewer"},"toolTipShadowSpread":0,"toolTipTextShadowOpacity":0},{"zoomEnabled":true,"viewerArea":"this.MainViewer","displayPlaybackBar":true,"surfaceSelectionEnabled":false,"arrowKeysAction":"translate","mouseControlMode":"drag_rotation","class":"PanoramaPlayer","id":"MainViewerPanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"touchControlMode":"drag_rotation"},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":41.25,"pitch":-12.16},"class":"PanoramaCamera","automaticZoomSpeed":10,"initialSequence":{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"pitchSpeed":4.21,"class":"TargetPanoramaCameraMovement","targetPitch":-9.99,"path":"shortest","yawSpeed":7.45,"easing":"cubic_in_out","targetYaw":127.75},{"pitchSpeed":3.14,"class":"TargetPanoramaCameraMovement","targetPitch":-6.47,"path":"shortest","yawSpeed":5.3,"easing":"cubic_in_out","targetYaw":-37.81},{"pitchSpeed":7.42,"class":"TargetPanoramaCameraMovement","targetPitch":-11.49,"path":"shortest","yawSpeed":13.9,"easing":"cubic_in_out","targetYaw":33.29}]},"id":"panorama_4348F654_4AE2_17BE_41A8_D10CDDF8BCB9_camera"},{"label":trans('panorama_43A4DE6D_4AE2_146E_41C5_27331148A903.label'),"id":"panorama_43A4DE6D_4AE2_146E_41C5_27331148A903","adjacentPanoramas":[{"class":"AdjacentPanorama","distance":7.39,"backwardYaw":37.06,"yaw":7.98,"select":"this.overlay_475564D3_4AEE_74BA_417A_C73A29930D52.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_4348F654_4AE2_17BE_41A8_D10CDDF8BCB9"},{"class":"AdjacentPanorama","distance":6.15,"yaw":112.45,"select":"this.overlay_44A6B751_4AEE_15B6_4164_3BACCA381214.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_40C5ADCB_4AE6_34AA_41BB_AF5D574E04BF"}],"class":"Panorama","partial":false,"pitch":0,"hfov":360,"frames":[{"cube":{"levels":[{"url":"media/panorama_43A4DE6D_4AE2_146E_41C5_27331148A903_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","width":15360,"colCount":30,"rowCount":5,"height":2560},{"url":"media/panorama_43A4DE6D_4AE2_146E_41C5_27331148A903_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","width":9216,"colCount":18,"rowCount":3,"height":1536},{"url":"media/panorama_43A4DE6D_4AE2_146E_41C5_27331148A903_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","width":6144,"colCount":12,"rowCount":2,"height":1024},{"url":"media/panorama_43A4DE6D_4AE2_146E_41C5_27331148A903_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","width":3072,"colCount":6,"rowCount":1,"height":512},{"url":"media/panorama_43A4DE6D_4AE2_146E_41C5_27331148A903_0/{face}/vr/0.jpg","tags":"mobilevr","class":"TiledImageResourceLevel","width":9216,"colCount":6,"rowCount":1,"height":1536}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_43A4DE6D_4AE2_146E_41C5_27331148A903_t.jpg","class":"CubicPanoramaFrame"}],"thumbnailUrl":"media/panorama_43A4DE6D_4AE2_146E_41C5_27331148A903_t.jpg","hfovMax":130,"overlays":["this.overlay_475564D3_4AEE_74BA_417A_C73A29930D52","this.overlay_44A6B751_4AEE_15B6_4164_3BACCA381214"],"hfovMin":"109%","vfov":180,"data":{"label":"Konge sjof\u00f8r"}},{"label":"Sigurd Fyllingsnes","class":"PlayerMenuItem","id":"TDVAuthor"},{"areas":["this.HotspotPanoramaOverlayArea_460A0035_4AE2_0BFE_41CA_44E8B2D2F689"],"class":"HotspotPanoramaOverlay","maps":[],"useHandCursor":true,"items":[{"verticalAlign":"middle","image":"this.AnimatedImageResource_5A0D5703_4B22_759A_4186_03C2480DAC44","class":"HotspotPanoramaOverlayImage","yaw":-77.76,"pitch":5.6,"vfov":16.25,"horizontalAlign":"center","scaleMode":"fit_inside","data":{"label":"GoToR0021005-hdr-denoise-denoise"},"hfov":13.31,"distance":50}],"id":"overlay_468FAFE5_4AE2_349E_41CC_6F5A49586E4D","data":{"label":"GoToR0021005-hdr-denoise-denoise","hasPanoramaAction":true},"rollOverDisplay":true,"enabledInCardboard":true},{"areas":["this.HotspotPanoramaOverlayArea_44AB51C8_4B1E_0C96_41D0_AB574A9E9D5A"],"class":"HotspotPanoramaOverlay","maps":[],"useHandCursor":true,"items":[{"horizontalAlign":"center","scaleMode":"fit_inside","verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","distance":50,"image":"this.res_454451AE_4AE2_0CEA_41A5_8E149547212D","pitch":-1.19,"data":{"label":"GoToKongesetet"},"vfov":5.53,"yaw":-77.76,"hfov":5.59}],"id":"overlay_580B010E_4B1E_0DAA_41A5_C798DFAE9BFD","data":{"label":"GoToKongesetet","hasPanoramaAction":true},"rollOverDisplay":false,"enabledInCardboard":true},{"areas":["this.HotspotPanoramaOverlayArea_478F35FB_4AE2_746A_41B4_6D13C6C25286"],"class":"HotspotPanoramaOverlay","maps":[],"useHandCursor":true,"items":[{"horizontalAlign":"center","scaleMode":"fit_inside","verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","distance":50,"image":"this.res_4545C1AC_4AE2_0CEE_4189_7FFF6FB26BC6","pitch":-8.83,"data":{"label":"GoToR0020902-hdr-denoise-denoise"},"vfov":16.14,"yaw":-29.04,"hfov":13.21}],"id":"overlay_47BBE5ED_4AE2_746E_41B9_825903855082","data":{"label":"GoToR0020902-hdr-denoise-denoise","hasPanoramaAction":true},"rollOverDisplay":false,"enabledInCardboard":true},{"areas":["this.HotspotPanoramaOverlayArea_477C9AD8_4AEE_FCB6_41A8_407C42C35D1C"],"class":"HotspotPanoramaOverlay","maps":[],"useHandCursor":true,"items":[{"horizontalAlign":"center","scaleMode":"fit_inside","verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","distance":50,"image":"this.res_454451AE_4AE2_0CEA_41A5_8E149547212D","pitch":-26.06,"data":{"label":"GoToR0021014-hdr-edit-denoiseai-denoise"},"vfov":6.77,"yaw":37.06,"hfov":6.77}],"id":"overlay_4764BACD_4AEE_FCAE_41C2_97828D73A171","data":{"label":"GoToR0021014-hdr-edit-denoiseai-denoise","hasPanoramaAction":true},"rollOverDisplay":false,"enabledInCardboard":true},{"areas":["this.HotspotPanoramaOverlayArea_472CA4DF_4AEE_74AA_41D0_876D23739CA6"],"class":"HotspotPanoramaOverlay","maps":[],"useHandCursor":true,"items":[{"horizontalAlign":"center","scaleMode":"fit_inside","verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","distance":50,"image":"this.res_454451AE_4AE2_0CEA_41A5_8E149547212D","pitch":-12.95,"data":{"label":"GoToR0021005-hdr-denoise-denoise"},"vfov":7.34,"yaw":7.98,"hfov":7.34}],"id":"overlay_475564D3_4AEE_74BA_417A_C73A29930D52","data":{"label":"GoToR0021005-hdr-denoise-denoise","hasPanoramaAction":true},"rollOverDisplay":false,"enabledInCardboard":true},{"areas":["this.HotspotPanoramaOverlayArea_44B93753_4AEE_15BA_41A1_27B9B7F6B192"],"class":"HotspotPanoramaOverlay","maps":[],"useHandCursor":true,"items":[{"horizontalAlign":"center","scaleMode":"fit_inside","verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","distance":50,"image":"this.res_4545C1AC_4AE2_0CEE_4189_7FFF6FB26BC6","pitch":-15.45,"data":{"label":"GoToR0020902-hdr-denoise-denoise"},"vfov":8.77,"yaw":112.45,"hfov":8.51}],"id":"overlay_44A6B751_4AEE_15B6_4164_3BACCA381214","data":{"label":"GoToR0020902-hdr-denoise-denoise","hasPanoramaAction":true},"rollOverDisplay":false,"enabledInCardboard":true},{"toolTip":trans('HotspotPanoramaOverlayArea_460A0035_4AE2_0BFE_41CA_44E8B2D2F689.toolTip'),"click":"this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_460A0035_4AE2_0BFE_41CA_44E8B2D2F689"},{"colCount":12,"class":"AnimatedImageResource","frameCount":150,"frameDuration":29,"repeat":1,"rowCount":13,"id":"AnimatedImageResource_5A0D5703_4B22_759A_4186_03C2480DAC44","levels":[{"url":"media/res_4543A1AE_4AE2_0CEA_41AD_5197AC4EC311_0.png","width":3252,"class":"ImageResourceLevel","height":4290}]},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_44AB51C8_4B1E_0C96_41D0_AB574A9E9D5A","click":"this.mainPlayList.set('selectedIndex', 1)"},{"class":"ImageResource","id":"res_454451AE_4AE2_0CEA_41A5_8E149547212D","levels":[{"url":"media/res_454451AE_4AE2_0CEA_41A5_8E149547212D_0.png","width":122,"class":"ImageResourceLevel","height":121}]},{"toolTip":trans('HotspotPanoramaOverlayArea_478F35FB_4AE2_746A_41B4_6D13C6C25286.toolTip'),"click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_478F35FB_4AE2_746A_41B4_6D13C6C25286"},{"class":"ImageResource","id":"res_4545C1AC_4AE2_0CEE_4189_7FFF6FB26BC6","levels":[{"url":"media/res_4545C1AC_4AE2_0CEE_4189_7FFF6FB26BC6_0.png","width":151,"class":"ImageResourceLevel","height":151}]},{"toolTip":trans('HotspotPanoramaOverlayArea_477C9AD8_4AEE_FCB6_41A8_407C42C35D1C.toolTip'),"click":"this.mainPlayList.set('selectedIndex', 2)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_477C9AD8_4AEE_FCB6_41A8_407C42C35D1C"},{"toolTip":trans('HotspotPanoramaOverlayArea_472CA4DF_4AEE_74AA_41D0_876D23739CA6.toolTip'),"click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_472CA4DF_4AEE_74AA_41D0_876D23739CA6"},{"toolTip":trans('HotspotPanoramaOverlayArea_44B93753_4AEE_15BA_41A1_27B9B7F6B192.toolTip'),"click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_44B93753_4AEE_15BA_41A1_27B9B7F6B192"}],"start":"this.init()","mobileMipmappingEnabled":false,"backgroundColor":["#FFFFFF"],"height":"100%","layout":"absolute","mediaActivationMode":"window","menu":["this.TDVAuthor"],"minHeight":20,"scrollBarVisible":"rollOver","class":"Player","minWidth":20,"scrollBarMargin":2,"shadow":false,"width":"100%","mouseWheelEnabled":true,"backgroundOpacity":1,"paddingTop":0,"propagateClick":false,"borderRadius":0,"data":{"defaultLocale":"nb","name":"Player498","textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"pitch":1,"volume":1,"rate":1,"speechOnTooltip":false},"locales":{"nb":"locale/nb.txt"}},"defaultVRPointer":"laser","scrollBarWidth":10,"backgroundPreloadEnabled":true};
    if (b['data'] == undefined)
        b['data'] = {};
    b['data']['translateObjs'] = a;
    b['data']['history'] = {};
    b['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](b);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.5.16.js.map
//Generated with v2020.5.16, Thu Jan 28 2021